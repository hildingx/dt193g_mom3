<template>
    <section class="container mx-auto my-5" style="max-width: 800px;">
        <h2 class="text-center">Om</h2>
        <p>
        Oj oj oj, mina tankar om Vue... <br>
        Lite rörigare än vad jag tänkte att det skulle vara. Det har tagit tid att lära sig förstå hur upplägget ska se ut med vyer och komponenter,
        men framförallt hur dessa ska knytas ihop. Det kändes inte intuitivt (i brist på bättre ord) att länka samman komponenterna med props och emits.
        Lite svårt ibland att förstå vad som är föräldra- och barnkomponent. 
        Kanske beror svårigheten på att jag nyss pysslat med Wordpress/PHP vilket rör till sättet att tänka på.
        <br><br>
        Med tiden har polleterna dock börjat trilla ner och nu tycker jag det är rätt trevligt att arbeta med Vue. 
        Gillar att ha <i>alla tre</i> i samma vue-fil, det vill säga template, script och style. Det blir liksom lättöverskådligt.
        Men att följa props och emits känns fortfarande lite rörigt. Hoppas det blir lite lättare med Pinia.
        </p>
        <div class="mt-4">
            <figure class="text-center">
                <img src="@/assets/chicken.jpg" class="img-fluid rounded mx-auto d-block" alt="Kyckling" />
                <figcaption class="text-muted fst-italic mt-2">
                    En Midjourney-genererad kyckling.
                </figcaption>
            </figure>
        </div>
    </section>
    
</template>

<script>

</script>

<style scoped>
img {
  max-width: 450px;
  width: 80%;
}
</style>