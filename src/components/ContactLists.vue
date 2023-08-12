<template>
    <div>
        <b-tooltip class="mx-2" v-for="(contact, index) in contacts" :key="index" :label="contact.tooltip">
            <a :href="contact.link" @click="() => { openModal(contact.image) }">
                <font-awesome-icon :icon="contact.icon" />
            </a>
        </b-tooltip>
        <b-modal v-model="isImageModalActive">
            <div style="display: flex;justify-content: center;">
                <img :src="image">
            </div>
            
        </b-modal>
    </div>
</template>
<script>
import contacts from '@/data/contacts';

export default {
    data() {
        return {
            contacts: contacts,
            isImageModalActive: false,
            image: null
        }
    },
    methods: {
        openModal(image) {
            if (image != null) {
                this.isImageModalActive = true
                this.image = image
            }
        }
    }
}
</script>