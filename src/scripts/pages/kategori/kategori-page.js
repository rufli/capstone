export default class AboutPage {
  async render() {
    return `
      <section class="container category-page-container">
        <div class="main-content">
          <div class="filter-section">
            <h2>Filter Lokasi</h2>
            <div class="filter-dropdown">
              <label for="kota">Semua Kota</label>
              <select id="kota">
                <option value="">Semua Kota</option>
              </select>
            </div>
            <div class="filter-dropdown">
              <label for="kategori">Semua Kategori</label>
              <select id="kategori">
                <option value="">Semua Kategori</option>
              </select>
            </div>
            <div class="filter-dropdown">
              <label for="urutkan">Urutkan</label>
              <select id="urutkan">
                <option value="populer">Paling Populer</option>
              </select>
            </div>
            <button class="search-button">Cari</button>
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

        <div class="category-content">
          <!-- Content for the category listing will go here -->
        </div>
      </div>
    </section>
    `;
  }

  async afterRender() {
    // Do your job here
  }
}
