import { inject } from "@angular/core";
import { Routes } from "@angular/router";
import { findParameter } from "./common/utils/route.util";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FeedbackListComponent } from "./components/feedback-list/feedback-list.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/login/login.component";
import { QuestionsComponent } from "./components/questions/questions.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ThanksComponent } from "./components/thanks/thanks.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'feedback/:id',
        component: FeedbackComponent,
        children: [
            {
                path: '',
                component: WelcomeComponent,
                canMatch: [() => findParameter(location.pathname) === 'start'],
            },
            {
                path: '',
                component: QuestionsComponent,
                canMatch: [() => findParameter(location.pathname) === 'questions'],
            },
            {
                path: '',
                component: ThanksComponent,
                canMatch: [() => findParameter(location.pathname) === 'thanks'],
            },
        ],
    },
    { path: 'feedback/list', component: FeedbackListComponent },
    { path: 'feedback/thanks', component: ThanksComponent },
    { path: '**', redirectTo: 'dashboard' },
];