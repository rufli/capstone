from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
from sklearn.preprocessing import StandardScaler

# Inisialisasi Flask
app = Flask(__name__)
CORS(app)

# Load model dan scaler
kmeans = joblib.load('kmeans_model.pkl')
scaler = joblib.load('scaler.pkl')

# Load data wisata yang sudah memiliki Predicted_Cluster
df = pd.read_csv('tourism_with_predicted_clusters.csv')

# Endpoint root (optional)
@app.route('/')
def home():
    return jsonify({
        'message': '🎉 ML Wisata API is running!',
        'endpoints': {
            'POST /predict-cluster': 'Prediksi cluster berdasarkan input user',
            'GET /get-recommendations/<cluster_id>': 'Ambil rekomendasi tempat wisata berdasarkan cluster',
            'GET /generate-itinerary/<cluster_id>': 'Hasilkan itinerary otomatis dari tempat wisata di cluster tertentu'
        }
    })

# Endpoint health check
@app.route('/health')
def health():
    return jsonify({'status': 'OK'})

# Endpoint prediksi cluster
@app.route('/predict-cluster', methods=['POST'])
def predict_cluster():
    try:
        data = request.get_json()

        # Ambil input user, default 0 jika kosong
        rating = float(data.get('Rating', 0))
        price = float(data.get('Price', 0))
        time = float(data.get('Time_Minutes', 0))
        lat = float(data.get('Lat', 0))
        long = float(data.get('Long', 0))

        features = [[rating, price, time, lat, long]]
        scaled = scaler.transform(features)
        cluster = int(kmeans.predict(scaled)[0])

        return jsonify({'cluster': cluster})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Endpoint rekomendasi berdasarkan cluster
@app.route('/get-recommendations/<int:cluster_id>', methods=['GET'])
def get_recommendations(cluster_id):
    try:
        recommendations = df[df['Predicted_Cluster'] == cluster_id][[
            'Place_Name', 'Category', 'City', 'Rating', 'Price'
        ]].to_dict(orient='records')

        return jsonify({
            'cluster': cluster_id,
            'total_recommendations': len(recommendations),
            'recommendations': recommendations
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ✅ Endpoint baru: itinerary otomatis berdasarkan cluster
@app.route('/generate-itinerary/<int:cluster_id>', methods=['GET'])
def generate_itinerary(cluster_id):
    try:
        places = df[df['Predicted_Cluster'] == cluster_id][[
            'Place_Name', 'Category', 'City', 'Rating', 'Price'
        ]]

        if places.empty:
            return jsonify({'error': 'Cluster tidak ditemukan atau tidak ada data'}), 404

        # Ambil 5 tempat dengan rating tertinggi sebagai itinerary
        itinerary = places.sort_values(by='Rating', ascending=False).head(5).to_dict(orient='records')

        return jsonify({
            'cluster': cluster_id,
            'itinerary_count': len(itinerary),
            'itinerary': itinerary
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Jalankan server
if __name__ == '__main__':
    app.run(debug=True)
