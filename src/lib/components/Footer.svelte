<script>
    import { ArrowUpRight, Zap, Music, Speaker, Heart } from 'lucide-svelte';
</script>

<svelte:head>
    <script>
        window.gtranslateSettings = {
            "default_language": "cs",
            "native_language_names": true,
            "detect_browser_language": true,
            "languages": ["cs", "de", "pl", "en", "uk"],
            "wrapper_selector": ".gtranslate_wrapper"
        };
    </script>
    <script src="https://cdn.gtranslate.net/widgets/latest/dropdown.js" defer></script>
</svelte:head>

<footer class="main-footer">
    <div class="container">
        <div class="footer-top">
            <div class="brand-side">
                <img src="/logofo.png" alt="Linity Agency" class="footer-logo" />
                <p class="brand-desc">Vytváříme nezapomenutelné eventy. Od techniky přes booking až po kompletní produkci.</p>
            </div>

            <div class="projects-side">
                <span class="section-label">Náš ekosystém</span>
                <div class="projects-grid">
                    <a href="https://linityagency.cz" target="_blank" class="project-link main-site">
                        <div class="icon-box active"><Zap size={18} strokeWidth={2.5} /></div>
                        <div class="link-text">
                            <strong>Linity Agency</strong>
                            <span>Kreativní produkce & eventy</span>
                        </div>
                        <ArrowUpRight size={14} class="external-icon" />
                    </a>

                    <a href="https://booking.linityagency.cz" target="_blank" class="project-link">
                        <div class="icon-box"><Music size={18} /></div>
                        <div class="link-text">
                            <strong>Linity Booking</strong>
                            <span>DJ & Club Management</span>
                        </div>
                        <ArrowUpRight size={14} class="external-icon" />
                    </a>

                    <a href="https://rental.linityagency.cz" target="_blank" class="project-link">
                        <div class="icon-box"><Speaker size={18} /></div>
                        <div class="link-text">
                            <strong>Linity Rental</strong>
                            <span>Půjčovna techniky</span>
                        </div>
                        <ArrowUpRight size={14} class="external-icon" />
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-bottom">
            <div class="bottom-left">
                <span class="copyright">&copy; {new Date().getFullYear()} Linity Agency</span>
            </div>

            <div class="bottom-center">
                <div class="gtranslate_wrapper"></div>
            </div>

            <div class="bottom-right">
                <span class="label">Made with</span>
                <Heart size={12} class="heart-icon" />
                <span class="label">by</span>
                <a href="https://vaclavnosek.cz" target="_blank" class="author-link">
                    Václav Nosek 
                    <ArrowUpRight size={16} />
                </a>
            </div>
        </div>
    </div>
</footer>

<style>
    .main-footer {
        background: #0b0f1a;
        color: #9ca3af;
        padding: 60px 0 30px;
        margin-top: auto;
        border-top: 1px solid #1f2937;
    }

    .footer-top {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 60px;
        margin-bottom: 40px;
    }

    .brand-side { max-width: 300px; }

    .footer-logo {
        height: 45px;
        width: auto;
        filter: brightness(0) invert(1);
        margin-bottom: 20px;
        opacity: 0.9;
    }

    .brand-desc { font-size: 0.95rem; line-height: 1.6; opacity: 0.6; }

    .section-label {
        display: block;
        color: #4b5563;
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        margin-bottom: 25px;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
    }

    .project-link {
        display: flex;
        align-items: center;
        gap: 15px;
        background: #111827;
        padding: 16px;
        border-radius: 18px;
        text-decoration: none;
        color: #d1d5db;
        border: 1px solid #1f2937;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
    }

    .project-link.main-site {
        border-color: rgba(34, 197, 94, 0.3);
    }

    .project-link:hover {
        background: #1f2937;
        border-color: #22c55e;
        color: white;
        transform: translateY(-4px);
    }

    .icon-box {
        background: #1f2937;
        color: #9ca3af;
        width: 42px;
        height: 42px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
    }

    .icon-box.active, .project-link:hover .icon-box {
        background: rgba(34, 197, 94, 0.1);
        color: #22c55e;
    }

    .link-text { display: flex; flex-direction: column; }
    .link-text strong { font-size: 0.95rem; font-weight: 700; }
    .link-text span { font-size: 0.75rem; opacity: 0.5; }

    .external-icon {
        position: absolute;
        top: 15px;
        right: 15px;
        opacity: 0.2;
    }

    .footer-divider {
        height: 1px;
        background: linear-gradient(to right, transparent, #1f2937, transparent);
        margin-bottom: 30px;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.85rem;
    }

    .bottom-center { display: flex; justify-content: center; flex: 1; }
    .bottom-right { display: flex; justify-content: flex-end; align-items: center; gap: 6px; flex: 1; }

    .heart-icon { color: #ef4444; margin: 0 2px; }

    .author-link {
        display: flex;
        align-items: center;
        gap: 6px;
        color: white;
        text-decoration: none;
        font-weight: 700;
        background: #1f2937;
        padding: 6px 14px;
        border-radius: 20px;
        transition: 0.2s;
    }

    .author-link:hover { background: #22c55e; transform: scale(1.05); }

    /* GTRANSLATE */
    :global(.gtranslate_wrapper select) {
        background-color: #111827 !important;
        color: white !important;
        border: 1px solid #1f2937 !important;
        padding: 6px 12px !important;
        border-radius: 20px !important;
        font-size: 0.8rem !important;
        font-weight: 700 !important;
        cursor: pointer !important;
        outline: none !important;
        appearance: none !important; 
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
        background-repeat: no-repeat !important;
        background-position: right 10px center !important;
        background-size: 0.8em !important;
        padding-right: 30px !important;
    }

    @media (max-width: 900px) {
        .footer-top { grid-template-columns: 1fr; text-align: center; gap: 40px; }
        .footer-bottom { flex-direction: column; gap: 25px; }
    }
</style> 
