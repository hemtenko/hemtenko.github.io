export async function initPhotoswipe() {
    let LightboxModule, PhotoSwipeModule;

    try {
        LightboxModule = await import('https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js');
        PhotoSwipeModule = await import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js');
    }
    catch {
        LightboxModule = await import('/components/photoswipe/dist/photoswipe-lightbox.esm.js');
        PhotoSwipeModule = await import('/components/photoswipe/dist/photoswipe.esm.js');
    }

    const PhotoSwipeLightBox = LightboxModule.default;
    const PhotoSwipe = PhotoSwipeModule.default;

    function waitForImage(img) {
        if (img.complete && img.naturalWidth) {
            return Promise.resolve();            
        }
        return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
        });
    }

    function setPwspSizes(img) {
        const link = img.parentElement;

        link.dataset.pswpHeight = img.naturalHeight;
        link.dataset.pswpWidth = img.naturalWidth;
    }

    function getPadding(gallery) {
        if (!gallery.classList.contains('padding')) {
            return {
                top: 80,
                bottom: 80
            }
        }

        return {
            top: 80,
            bottom: 80,
            right: 80,
            left: 80
        }
    }

    document.querySelectorAll('.images-container').forEach(async gallery => {
        const imgs = Array.from(gallery.querySelectorAll('img'));

        await Promise.all(imgs.map(waitForImage));
        imgs.forEach(setPwspSizes);
        
        new PhotoSwipeLightBox({
            gallery,
            children: 'a',
            pswpModule: () => PhotoSwipe,
            zoom: true,
            secondaryZoomLevel: 2,
            maxZoomLevel: 4,
            wheelToZoom: true,
            padding: getPadding(gallery)
        }).init();
    });

    document.querySelectorAll('.image').forEach(async gallery => {
        const imgs = Array.from(gallery.querySelectorAll('img'));

        await Promise.all(imgs.map(waitForImage));
        imgs.forEach(setPwspSizes);

        new PhotoSwipeLightBox({
            gallery,
            children: 'a',
            pswpModule: () => PhotoSwipe,
            secondaryZoomLevel: 2,
            maxZoomLevel: 4,
            padding: getPadding(gallery)
        }).init();
    });
}