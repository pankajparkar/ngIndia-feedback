export const questions = [{
    title: 'Talk 1',
    subtitle: 'by Stanemira',
}, {
    title: 'Talk 2',
    subtitle: 'by XYZ',
}, {
    title: 'Talk 3',
    subtitle: 'by SSSSS',
}, {
    title: 'Talk 4',
    subtitle: 'by ASD ASD',
}, {
    title: 'Talk 5',
    subtitle: 'by PQR',
}];

export const steps = {
    start: {
        stepTitle: 'Welcome',
        stepSubtitle: 'Please share your feedback',
        cardTitle: 'Please enter your details',
        cardSubtitle: 'This feedback will be ananymous',
    },
    questions: {
        stepTitle: 'Feedback for Talks',
        stepSubtitle: '',
        questions,
    },
    thanks: {
        stepTitle: 'Thanks for your feedback',
        stepSubtitle: '',
        cardTitle: 'Card Title',
        cardSubtitle: 'Card Subtitle',
    }
};