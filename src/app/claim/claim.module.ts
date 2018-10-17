import { NgModule } from '@angular/core' ;
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule} from '@angular/forms';

// Page imports

import { ClaimDetailsPage } from './claim-details/claim-details.page'
import { ClaimRequestPage } from './claim-request/claim-request.page'
import { ClaimHistoryPage } from './claim-history/claim-history.page'

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : 'request',
                component: ClaimRequestPage
            },
            {
                path : 'details',
                component: ClaimDetailsPage
            },
            {
                path : 'history',
                component: ClaimHistoryPage
            },
        ])
    ],
    exports: [
        ClaimRequestPage,
        ClaimDetailsPage,
        ClaimHistoryPage
    ],
    declarations : [
        ClaimRequestPage,
        ClaimDetailsPage,
        ClaimHistoryPage
    ]
})

export class ClaimModule {}