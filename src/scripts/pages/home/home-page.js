export default class HomePage {
  async render() {
    return `

      <section class="homepage-container">
        <div class="hero">
          <img src="images/nature.jpg" alt="nature" class="hero-image" />
          <div class="hero-content">
            <h1>Selamat Datang di Jelajah.ID</h1>
            <p>Rencanakan Wisatamu dengan Mudah!</p>
          </div>
        </div>
        
          <div class="section-wrapper">
          <h2>Rekomendasi Populer</h2>
          <div class="rekomendasi-populer-grid">
            <div class="rekomendasi-item">
              <div class="rekomendasi-image">
                <img src="images/alam.jpg" alt="Gunung Bromo">
              </div>
              <div class="rekomendasi-info">
                <h3>Gunung Bromo</h3>
                <p>Jawa Timur</p>
                <a href="#/detail" class="lihat-detail-btn">Lihat Detail</a>
              </div>
            </div>
            <div class="rekomendasi-item">
              <div class="rekomendasi-image">
                <img src="images/raja ampat.jpg" alt="Raja Ampat">
              </div>
              <div class="rekomendasi-info">
                <h3>Raja Ampat</h3>
                <p>Papua Barat</p>
                <a href="#/detail" class="lihat-detail-btn">Lihat Detail</a>
              </div>
            </div>
            <div class="rekomendasi-item">
              <div class="rekomendasi-image">
                <img src="images/pantai kuta.jpg" alt="Pantai Kuta">
              </div>
              <div class="rekomendasi-info">
                <h3>Pantai Kuta</h3>
                <p>Bali</p>
                <a href="#/detail" class="lihat-detail-btn">Lihat Detail</a>
              </div>
            </div>
            <div class="rekomendasi-item">
              <div class="rekomendasi-image">
                <img src="images/borobudur.jpg" alt="Candi Borobudur">
              </div>
              <div class="rekomendasi-info">
                <h3>Candi Borobudur</h3>
                <p>Jawa Tengah</p>
                <a href="#/detail" class="lihat-detail-btn">Lihat Detail</a>
              </div>
            </div>
          </div>
        </div>
        
        
        <div class="section-wrapper">
          <h2>Kategori Wisata</h2>
          <div class="kategori-wisata-grid">
            <a href="#/alam" class="kategori-card" style="background-image: url('images/alam.jpg')">
              <span>Wisata Alam</span>
            </a>
            <a href="#/sejarah" class="kategori-card" style="background-image: url('images/sejarah.jpeg')">
              <span>Wisata Sejarah</span>
            </a>
            <a href="#/hiburan" class="kategori-card" style="background-image: url('images/hiburan.jpeg')">
              <span>Wisata Hiburan</span>
            </a>
            <a href="#/religi" class="kategori-card" style="background-image: url('images/religi.jpeg')">
              <span>Wisata Religi</span>
            </a>
            <a href="#/belanja" class="kategori-card" style="background-image: url('images/belanja.jpeg')">
              <span>Wisata Belanja</span>
            </a>
          </div>
        </div>
      </section>

      

      
    `;
  }

  async afterRender() {
    // Do your job here
  }
}
