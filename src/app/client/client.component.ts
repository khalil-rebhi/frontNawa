import { Component, OnInit, Renderer2 } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  readonly styles:string[] = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    "/assets/client/css/client-bootstrap.css",
    "/assets/client/css/style.css",
    "/assets/client/css/reset.css",
    "/assets/client/css/custom.css",
    "/assets/client/css/colorbox.css",
    "/assets/client/css/comments.css",
    "/assets/client/css/contact_form.css",
    "/assets/client/css/elastislide.css",
    "/assets/client/css/featurestab.css",
    "/assets/client/css/font-awesome-ie7.css",
    "/assets/client/css/fonts.css",
    "/assets/client/css/popup.css",
    "/assets/client/css/responsive.css",
    "/assets/client/css/shortcodes.css",
    "/assets/client/css/tipsy.css",
    "/assets/client/css/usquare.css",
    "/assets/client/css/widgets.css"
  ];

  readonly js: string[]=[
    '/assets/client/js/comment-reply.min.js',
    '/assets/client/js/underscore.min.js',
    '/assets/client/js/jquery/jquery.masonry.min.js',
    '/assets/client/sliders/polaroid/js/jquery.polaroid.js',
    '/assets/client/js/jquery.colorbox-min.js',
    '/assets/client/js/jquery.easing.js',
    '/assets/client/js/jquery.carouFredSel-6.1.0-packed.js',
    '/assets/client/js/jQuery.BlackAndWhite.js',
    '/assets/client/js/jquery.touchSwipe.min.js',
    '/assets/client/sliders/polaroid/js/jquery.transform-0.8.0.min.js',
    '/assets/client/sliders/polaroid/js/jquery.preloader.js',
    '/assets/client/js/responsive.js',
    '/assets/client/js/mobilemenu.js',
    '/assets/client/js/jquery.superfish.js',
    '/assets/client/js/jquery.placeholder.js',
    '/assets/client/js/contact.js',
    '/assets/client/js/jquery.tipsy.js',
    '/assets/client/js/jquery.cycle.min.js',
    '/assets/client/js/shortcodes.js',
    '/assets/client/js/jquery/jquery.js',
    '/assets/client/js/jquery.custom.js',
    '/assets/js/jquery/jquery.js'
  ];

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    this.styles.forEach(element => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'href', element);
      this.renderer.appendChild(document.head, linkElement);
    });
    const linkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(linkElement,"rel",'stylesheet');
    this.renderer.setAttribute(linkElement,"integrity","sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC");
    this.renderer.setAttribute(linkElement,"crossorigin",'anonymous');
    this.renderer.setAttribute(linkElement,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
    this.js.forEach(element => {
      const linkElement = this.renderer.createElement('script');
      this.renderer.setAttribute(linkElement, 'src', element);
      this.renderer.setAttribute(linkElement, 'type', "text/javascript");
      this.renderer.appendChild(document.head, linkElement);
    });
  }

}
