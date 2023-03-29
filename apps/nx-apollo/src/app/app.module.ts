import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiModule } from '@nx-apollo-angular-example/common-ui';
import { FeatureSetsModule } from '@nx-apollo-angular-example/feature-sets';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { MyInterceptor } from './my-interceptor';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonUiModule, HttpClientModule, GraphQLModule, FeatureSetsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}