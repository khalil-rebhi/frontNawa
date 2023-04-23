import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  readonly styles:string[] = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    "/assets/admin/css/style.css",
    "/assets/admin/plugins/chartist-plugin-tooltips/css/chartist-plugin-tooltip.css",
    "/assets/admin/plugins/chartist/css/chartist.min.css"
  ];

  readonly js: string[]=[
    '/assets/admin/plugins/common/common.min.js',
    '/assets/admin/js/settings.js',
    '/assets/admin/js/custom.min.js',
    '/assets/admin/js/gleek.js',
    '/assets/admin/js/styleSwitcher.js',
    '/assets/admin/js/dashboard/dashboard-1.js',
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.styles.forEach(element => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'href', element);
      this.renderer.appendChild(document.head, linkElement);
    });
    this.js.forEach(element => {
      const linkElement = this.renderer.createElement('script');
      this.renderer.setAttribute(linkElement, 'src', element);
      this.renderer.setAttribute(linkElement, 'type', "text/javascript");
      this.renderer.appendChild(document.head, linkElement);
    });
  }
}
