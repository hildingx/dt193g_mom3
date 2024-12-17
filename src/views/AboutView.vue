<template>
    <section class="container mx-auto my-5" style="max-width: 800px;">
        <h2 class="text-center">Om</h2>
        <p>
        Oj oj oj, mina tankar om Vue... <br>
        Lite rörigare än vad jag tänkte att det skulle vara. Det har tagit tid att lära sig förstå hur upplägget ska se ut med vyer och komponenter,
        men framförallt hur dessa ska knytas ihop. Det kändes inte intuitivt (i brist på bättre ord) att länka samman komponenterna med props och emits.
        Lite svårt ibland att förstå vad som är parent och child. 
        <br><br>
        Med tiden har polleterna dock börjat trilla ner och nu tycker jag det är rätt trevligt att arbeta med Vue. 
        Gillar att ha <i>alla tre</i> i samma vue-fil, det vill säga template, script och style.
        </p>
        <div class="mt-4">
            <figure class="text-center">
                <img :src="chicken" class="img-fluid rounded mx-auto d-block" alt="Kyckling" />
                <figcaption class="text-muted fst-italic mt-2">
                    En Midjourney-genererad kyckling.
                </figcaption>
            </figure>
        </div>
    </section>
    
</template>

<script>
import chicken from "@/assets/chicken.jpg";
    export default {
        data() {
            return {
                chicken,
            };
        }
    };
</script>

<style scoped>
p {

}
img {
  max-width: 450px;
  width: 80%;
}
</style>