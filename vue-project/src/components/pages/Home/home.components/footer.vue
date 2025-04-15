<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="footer">
        <Divider />
        <div class="footer-content">
            <div class="footer-section">
                <h3>Meie teenused</h3>
                <ul>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">info</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Võta ühendust</h3>
                <p>Email: info@example.com</p>
                <p>Telefon: +372 5XX XXXX</p>
                <div class="social-buttons">
                    <Button icon="pi pi-facebook" rounded text aria-label="Facebook" />
                    <Button icon="pi pi-twitter" rounded text aria-label="Twitter" />
                    <Button icon="pi pi-instagram" rounded text aria-label="Instagram" />
                    <Button icon="pi pi-linkedin" rounded text aria-label="LinkedIn" />
                </div>
            </div>
            <div class="footer-section">
                <h3>Tellige uudiskiri</h3>
                <p>Saate kursis olla meie uudiste ja pakkumistega</p>
                <div class="newsletter">
                    <Button label="Tellige" icon="pi pi-envelope" />
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; {{ currentYear }} Sinu Ettevõte. Kõik õigused kaitstud.</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: var(--surface-ground, #525252);
    padding: 2rem 1rem;
    margin-top: auto;
    width: 100%;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;
}

.footer-section {
    flex: 1;
    min-width: 250px;
}

.footer-section h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: var(--text-color, #495057);
}

.footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: var(--text-color-secondary, #6c757d);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section ul li a:hover {
    color: var(--primary-color, #3B82F6);
}

.social-buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.newsletter {
    margin-top: 1rem;
}

.footer-bottom {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--surface-border, #dee2e6);
    color: var(--text-color-secondary, #6c757d);
}
</style>