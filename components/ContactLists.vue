<template>
    <div class="contact-list">
        <div class="mx-2" v-for="(contact, index) in contacts" :key="index" :title="contact.tooltip">
            <a :href="contact.link" @click="() => { openModal(contact.image) }">
                <font-awesome-icon :icon="contact.icon" />
            </a>
        </div>
        
        <!-- Simple modal implementation -->
        <div v-if="isImageModalActive" class="modal is-active" @click="closeModal">
            <div class="modal-background"></div>
            <div class="modal-content" @click.stop>
                <div style="display: flex; justify-content: center;">
                    <img :src="image" alt="Contact QR Code">
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import contacts from '~/data/contacts'

const isImageModalActive = ref(false)
const image = ref(null)

const openModal = (img) => {
    if (img != null) {
        isImageModalActive.value = true
        image.value = img
    }
}

const closeModal = () => {
    isImageModalActive.value = false
    image.value = null
}
</script>

<style scoped>
/* Make contacts display horizontally in a row */
.contact-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.contact-list > div {
    display: inline-block;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
}

.modal-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    position: relative;
    margin: 20px auto;
    padding: 20px;
    background: white;
    border-radius: 6px;
    max-width: 500px;
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #333;
}
</style>