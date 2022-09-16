import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFaclxJXGNWf1ZpR2NbfU54flZCal9VVBYiSV9jS3xTf0RmW39ddXFcQGFYUA==');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));





