import { TestBed, inject } from '@angular/core/testing';

import { PlantillaComponent } from './plantilla.component';

describe('a plantilla component', () => {
	let component: PlantillaComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PlantillaComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PlantillaComponent], (PlantillaComponent) => {
		component = PlantillaComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});