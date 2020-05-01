import { Injectable } from '@angular/core';

@Injectable()
export class HomeSearchService {
    constructor() { }

    public getLocations() {
        return this.locations;
    }

    locations = [{
        name: 'Rome',
        country: 'Italy',
        city: 'Somewhere'
    },
    {
        name: 'Japan',
        country: 'Japan',
        city: 'Japan'
    },
    {
        name: 'England',
        country: 'England',
        city: 'England'
    }
    ]
}

