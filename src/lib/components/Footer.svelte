<script>
    // Úplně prázdný script, nic neimportujeme
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

<footer class="simple-footer">
    <div class="container footer-content">
        
        <div class="footer-left">
            <img src="/logofo.png" alt="Linity Agency" class="footer-logo" />
            <span class="copyright">&copy; {new Date().getFullYear()} Linity Agency</span>
        </div>

        <div class="footer-center">
            <div class="gtranslate_wrapper"></div>
        </div>

        <div class="footer-right">
            <span class="label">Made by</span>
            <a href="https://instagram.com/vena_nosek" target="_blank" class="author-link">
                Václav Nosek 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
            </a>
        </div>

    </div>
</footer>

<style>
    .simple-footer {
        background: #111827;
        color: #9ca3af;
        padding: 25px 0;
        margin-top: 80px;
        border-top: 1px solid #1f2937;
        font-size: 0.9rem;
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-left {
        display: flex;
        align-items: center;
        gap: 20px;
        flex: 1;
    }

    .footer-logo {
        height: 40px; 
        width: auto;
        filter: brightness(0) invert(1); 
        opacity: 0.8;
    }

    .copyright {
        opacity: 0.6;
    }

    .footer-center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1; 
    }

    .footer-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        flex: 1; 
    }

    .label {
        font-size: 0.85rem;
        opacity: 0.6;
    }

    .author-link {
        display: flex;
        align-items: center;
        gap: 6px;
        color: white;
        text-decoration: none;
        font-weight: 600;
        background: #1f2937; 
        padding: 6px 12px;
        border-radius: 20px;
        transition: all 0.2s;
    }

    .author-link:hover {
        background: var(--color-primary-dark, #22c55e); 
        color: white;
        transform: translateY(-2px);
    }

    :global(.gtranslate_wrapper select) {
        background-color: #1f2937 !important;
        color: white !important;
        border: 1px solid #374151 !important;
        padding: 6px 12px !important;
        border-radius: 20px !important;
        font-size: 0.85rem !important;
        font-family: inherit !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        outline: none !important;
        transition: all 0.2s !important;
        appearance: none !important; 
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
        background-repeat: no-repeat !important;
        background-position: right 10px center !important;
        background-size: 1em !important;
        padding-right: 30px !important;
    }

    :global(.gtranslate_wrapper select:hover) {
        background-color: var(--color-primary-dark, #22c55e) !important;
        border-color: var(--color-primary-dark, #22c55e) !important;
    }

    :global(.gtranslate_wrapper select option) {
        background-color: #111827 !important;
        color: white !important;
    }

    @media (max-width: 800px) {
        .footer-content {
            flex-direction: column;
            gap: 25px;
            text-align: center;
        }

        .footer-left, .footer-center, .footer-right {
            flex-direction: column;
            justify-content: center;
            flex: auto;
        }

        .footer-left {
            gap: 10px;
        }
    }
</style>