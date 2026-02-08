class SearchModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="modal fade" id="searchModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-transparent">
            <div class="modal-body">
              <form action="https://www.google.com/search" method="GET" onsubmit="bootstrap.Modal.getInstance(document.getElementById('searchModal')).hide()">
                <div class="input-group">
                  <input type="hidden" name="hl" value="ja" />
                  <input type="hidden" name="sitesearch" value="kinjouj.github.io" />
                  <input type="search" name="q" class="form-control rounded-2 py-4" placeholder="Search" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    const modal = document.getElementById('searchModal');
    modal.addEventListener('shown.bs.modal', () => {
      requestAnimationFrame(() => {
        document.querySelector('#searchModal input[name="q"]').focus();
      });
    });

    modal.addEventListener('hide.bs.modal', () => {
      $('.modal').removeAttr('aria-hidden');
    });
  }
}

class BackToTopButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="#top" class="btn-back-to-top btn btn-info btn-floating btn-lg">
        <i class="fas fa-arrow-up"></i>
      </a>
    `;
  }
}

customElements.define('search-modal', SearchModal);
customElements.define('back-to-top', BackToTopButton);
