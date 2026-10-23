class AppHeader extends HTMLElement {
        connectedCallback() {
                // Rileva in modo sicuro se siamo in una pagina dentro /notizie/
                const isNotizie = window.location.pathname.includes('/notizie/');
                const base = isNotizie ? '../' : '';

                this.innerHTML = `
                        <header>
                                <div class="brand">
                                        <a href="${base}index.html">
                                                <img src="${base}assets/logo.png" alt="Pro Loco Piazzolla di Nola" style="height: 58px; width: auto; vertical-align: middle;">
                                        </a>
                                </div>
                                <ul class="nav-links">
                                        <li><a href="${base}index.html">Home</a></li>
                                        <li><a href="${base}chi-siamo.html">Chi siamo</a></li>
                                        <li><a href="${base}statuto.html">Statuto</a></li>
                                        <li><a href="${base}organigramma.html">Organigramma</a></li>
                                        <li><a href="${base}servizio-civile.html">Servizio Civile</a></li>
                                        <li class="nav-dropdown">
                                                <a href="#" class="nav-dropdown-toggle">Eventi Tradizionali <span class="nav-arrow">&#9660;</span></a>
                                                <ul class="nav-dropdown-menu">
                                                        <li><a href="${base}notizie/mercatini-di-natale.html">Mercatini di Natale</a></li>
                                                        <li><a href="${base}notizie/passione-di-cristo.html">Passione di Cristo</a></li>
                                                        <li><a href="${base}notizie/passeggiata-ecologica.html">Passeggiata Ecologica</a></li>
                                                        <li><a href="${base}notizie/laboratorio-di-cartapesta.html">Laboratori di Cartapesta</a></li>
                                                </ul>
                                        </li>
                                        <li class="nav-dropdown">
                                                <a href="#" class="nav-dropdown-toggle">Area Stampa <span class="nav-arrow">&#9660;</span></a>
                                                <ul class="nav-dropdown-menu">
                                                        <li><a href="${base}comunicati-stampa.html">Comunicati Stampa</a></li>
                                                        <li><a href="${base}ufficio-stampa.html">Ufficio Stampa</a></li>
                                                </ul>
                                        </li>
                                        <li><a href="${base}dove-siamo.html">Dove siamo</a></li>
                                        <li><a href="${base}contatti.html">Contatti</a></li>
                                </ul>
                                <button class="mobile-menu-btn">
                                        ☰
                                </button>
                        </header>
                `;
        }
}

class AppFooter extends HTMLElement {
        connectedCallback() {
                // Calcola il prefisso base per il footer
                const isNotizie = window.location.pathname.includes('/notizie/');
                const base = isNotizie ? '../' : '';

                this.innerHTML = `
                         <footer>
                                 <div class="footer-grid">
                                         <div class="footer-col">
                                                 <h4>Pro Loco Piazzola di Nola</h4>
                                                 <p>Associazione turistica di Piazzola. Promozione, accoglienza e tutela del patrimonio culturale, storico e ambientale della nostra frazione.</p>
                                         </div>
                                         <div class="footer-col">
                                                 <h4>Link Rapidi</h4>
                                                 <ul>
                                                         <li><a href="${base}chi-siamo.html">Chi siamo</a></li>
                                                         <li><a href="${base}statuto.html">Statuto</a></li>
                                                         <li><a href="${base}servizio-civile.html">Servizio Civile in Pro Loco</a></li>
                                                 </ul>
                                         </div>
                                         <div class="footer-col">
                                                 <h4>Contatti</h4>
                                                 <ul>
                                                         <li>Email: prolocopiazzolla@gmail.com</li>
                                                         <li>Indirizzo: Via Costantinopoli 121, Piazzolla di Nola (NA)</li>
                                                         <li><a href="${base}contatti.html">Scrivici</a></li>
                                                 </ul>
                                         </div>
                                 </div>
                                 <div class="footer-bottom">
                                         <p>&copy; ${new Date().getFullYear()} Pro Loco Piazzola di Nola. Tutti i diritti riservati.</p>
                                         <p class="footer-made-by"><a href="https://www.isotech-ai.it/" target="_blank" rel="noopener noreferrer" class="footer-isotech-link" aria-label="Design by IsoTech"><span class="footer-design-by">Design by</span> <span class="footer-isotech-name">IsoTech</span></a></p>
                                 </div>
                         </footer>
                 `;
        }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);