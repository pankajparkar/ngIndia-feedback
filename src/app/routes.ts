import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FeedbackListComponent } from "./components/feedback-list/feedback-list.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ThanksComponent } from "./components/thanks/thanks.component";
import { WizardComponent } from "./components/wizard/wizard.component";

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'wizard', component: WizardComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'feedback/list', component: FeedbackListComponent },
    { path: 'feedback/thanks', component: ThanksComponent },
    { path: '**', redirectTo: 'dashboard' },
];