import { Component } from "@angular/core";

@Component({
    selector: 'services',
    templateUrl: './services.html',
    styleUrls: ['./services.scss']
})

export class Services {
    public inspections = [
        {
          category: 'Structural Inspection',
          icon: 'assignment',
          items: [
            "Foundation",
            "Grading and Drainage",
            "Roof Covering",
            "Walls - Interior and Exterior",
            "Ceilings and Floors",
            "Stairways - Interior and Exterior",
            "Windows Doors - Interior and Exterior",
            "Fireplace",
            "Porches, Decks and Railing",
            "Garage Doors and Openers",
            "Balconies and Carports"
          ]
        },
        {
          category: 'Electrical Inspection',
          icon: 'flash_on',
          items: [
            "Service Entrance and Panels",
            "Branch Circuits",
            "Connected Devices and Fixtures",
            "GFCIs",
            "Arc Faults",
            "Smoke Detectors",
            "Carbon Dioxide Detectors"
          ]
        },
        {
          category: 'HVAC Inspection',
          icon: 'toys',
          items: [
            "Heating Equipment",
            "Cooling Equipment",
            "Vents",
            "Duct Systems"
          ]
        },
        {
          category: 'Plumbing Inspection',
          icon: 'waves',
          items: [
            "Water Supply Systems",
            "Fixtures",
            "Water Heating Equipment",
            "Hydro – Massage Therapy Equipment",
            "Water PSI"
          ]
        },
        {
          category: 'Appliance Inspection',
          icon: 'check_circle',
          items: [
            "Dishwasher",
            "Food Waste Disposal",
            "Range Hood",
            "Exhaust Systems",
            "Range, Cooktops and Ovens",
            "Microwave Ovens",
            "Mechanical Exhaust Vents",
            "Dryer Exhaust Vents"
          ]
        }
      ]  
}