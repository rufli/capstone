export default class ItenaryPage {
    async render() {
        return `
      <section class="container">
        
        <div class="itenary-header">
          <h2>Rencana Perjalanan</h2>
          <button class="tambah-rencana-btn">+ Tambah Rencana</button>
        </div>
        
        <div class="itenary-list">
          <div class="list-header">
            <div class="col">NO</div>
            <div class="col">Kota</div>
            <div class="col">Kategori</div>
            <div class="col">Harga</div>
            <div class="col">Aksi</div>
          </div>
          <div class="list-item" data-id="1">
            <div class="col">1.</div>
            <div class="col">Jakarta</div>
            <div class="col">Wisata Alam</div>
            <div class="col">Rp 500.000</div>
            <div class="col actions">
              <button class="view-btn"><i class="fas fa-eye"></i></button>
              <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
          </div>
          <div class="list-item" data-id="2">
            <div class="col">1.</div>
            <div class="col">Jakarta</div>
            <div class="col">Wisata Alam</div>
            <div class="col">Rp 500.000</div>
            <div class="col actions">
              <button class="view-btn"><i class="fas fa-eye"></i></button>
              <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
          </div>
           <div class="list-item" data-id="3">
            <div class="col">1.</div>
            <div class="col">Jakarta</div>
            <div class="col">Wisata Alam</div>
            <div class="col">Rp 500.000</div>
            <div class="col actions">
              <button class="view-btn"><i class="fas fa-eye"></i></button>
              <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
          </div>
           <div class="list-item" data-id="4">
            <div class="col">1.</div>
            <div class="col">Jakarta</div>
            <div class="col">Wisata Alam</div>
            <div class="col">Rp 500.000</div>
            <div class="col actions">
              <button class="view-btn"><i class="fas fa-eye"></i></button>
              <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
          </div>
           <div class="list-item" data-id="5">
            <div class="col">1.</div>
            <div class="col">Jakarta</div>
            <div class="col">Wisata Alam</div>
            <div class="col">Rp 500.000</div>
            <div class="col actions">
              <button class="view-btn"><i class="fas fa-eye"></i></button>
              <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        </div>
        
      </section>

      <!-- Modal Structure -->
      <div class="modal-overlay">
        <div class="modal-content">
          <span class="close-button">&times;</span>
          <h2>Buat Rencana Perjalanan Baru</h2>
          <div class="modal-form">
            <div class="form-group">
              <label for="kategori">Kategori</label>
              <select id="kategori">
                <option value="">Semua Kategori</option>
                <!-- Options will be populated here -->
              </select>
            </div>
            <div class="form-group">
              <label for="budget">Budget</label>
              <input type="text" id="budget" placeholder="Rp 50000">
            </div>
            <div class="form-group">
              <label for="rating">Rating</label>
              <input type="text" id="rating" placeholder="3 (Standar)">
            </div>
             <div class="form-group">
              <label for="kota">Kota</label>
              <input type="text" id="kota" placeholder="Bali">
            </div>
             <!-- This group will span two columns if needed, based on CSS -->
             <div class="form-group full-width" style="display: none;">
              <label for="placeholder">Placeholder Full Width</label>
              <input type="text" id="placeholder">
            </div>
          </div>
           <button class="tambah-list-btn">Tambah ke List Rencana</button>
        </div>
      </div>
    `;
  }

  async afterRender() {
    // Do your job here
    const openModalBtn = document.querySelector('.tambah-rencana-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalBtn = document.querySelector('.close-button');

    if (openModalBtn && modalOverlay && closeModalBtn) {
      // Open modal when button is clicked
      openModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('visible');
      });

      // Close modal when close button is clicked
      closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('visible');
      });

      // Close modal when clicking outside the modal content
      modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
          modalOverlay.classList.remove('visible');
        }
      });
    }

    // Add event listeners for view buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        // Find the parent list-item to get the ID
        const listItem = event.target.closest('.list-item');
        if (listItem) {
          const itineraryId = listItem.dataset.id;
          // Navigate to the itinerary detail page
          window.location.hash = `#/itenary/${itineraryId}`;
        }
      });
    });
  }
}
