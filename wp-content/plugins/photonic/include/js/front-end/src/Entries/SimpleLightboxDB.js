import {Core} from "../Core";
import {PhotonicSimpleLightboxDB} from "../Lightboxes/SimpleLightboxDB";
import * as Listeners from "../Listeners";
import * as Layout from "../Layouts/Layout";

document.addEventListener('DOMContentLoaded', () => {
	const lightbox = new PhotonicSimpleLightboxDB();
	Core.setLightbox(lightbox);
	lightbox.initialize();
	lightbox.initialize('.launch-gallery-baguettebox-solo');
	lightbox.initialize('.baguettebox-html5-video');

	Core.executeCommon();
	Listeners.addAllListeners();
	Layout.initializeLayouts(lightbox);
});
