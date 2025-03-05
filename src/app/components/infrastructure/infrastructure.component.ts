import { Component } from '@angular/core';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrl: './infrastructure.component.scss'
})
export class InfrastructureComponent {
  infrastructures = [
    {
      name: 'CNC Machines',
      image: 'assets/infrastructures/cnc_machines.jpeg',
      description: 'Computer Numerical Control machines offering precise, automated manufacturing capabilities for complex parts with exceptional accuracy and repeatability.'
    },
    {
      name: 'Lathe Machine',
      image: 'assets/infrastructures/lathe_machine.jpeg',
      description: 'Versatile machine tool for rotating workpieces to perform various operations like cutting, sanding, drilling, and creating cylindrical parts with high precision.'
    },
    {
      name: 'Milling Machine',
      image: 'assets/infrastructures/milling_machine.jpeg',
      description: 'Precision cutting tool used for machining solid materials, capable of cutting slots, planes, and complex 3D shapes with rotating multi-point cutters.'
    },
    {
      name: 'Drilling Machine',
      image: 'assets/infrastructures/drilling_machine.jpeg',
      description: 'Specialized equipment for creating precise holes in materials, featuring variable speed control and multiple drill bit compatibility.'
    },
    {
      name: 'VMC',
      image: 'assets/infrastructures/vmc.jpeg',
      description: 'Vertical Machining Center offering advanced 3-axis or more CNC capabilities for complex milling, drilling, and precision machining operations.'
    },
    {
      name: 'Slotting Machine',
      image: 'assets/infrastructures/slotting_machine.jpeg',
      description: 'Specialized machine tool for cutting internal keyways, grooves, and slots in workpieces with reciprocating vertical ram movement.'
    },
    {
      name: 'Light Duty Lathe',
      image: 'assets/infrastructures/light_duty_lathe.jpeg',
      description: 'Compact lathe machine ideal for smaller workpieces and precision turning operations, perfect for detailed work and smaller component manufacturing.'
    },
    {
      name: 'Heavy Duty Lathe',
      image: 'assets/infrastructures/heavy_duty_lathe.jpeg',
      description: 'Robust lathe machine designed for large-scale workpieces, capable of handling heavy materials and providing powerful turning operations.'
    },
    {
      name: 'Laser Marking Machine',
      image: 'assets/infrastructures/laser_marking_machine.jpeg',
      description: 'High-precision laser system for permanent marking, engraving, and identification of parts with exceptional accuracy and consistency.'
    },
    {
      name: 'Hydraulic Press',
      image: 'assets/infrastructures/hydraulic_press.jpeg',
      description: 'Powerful compression equipment using hydraulic pressure for metal forming, stamping, and shaping operations with controlled force application.'
    },
    {
      name: 'Band Saw Machine',
      image: 'assets/infrastructures/band_saw_machine.jpeg',
      description: 'Continuous cutting machine using a toothed metal band for precise cutting of metals and other materials with minimal material waste.'
    },
    {
      name: 'Broaching Machine',
      image: 'assets/infrastructures/broaching_machine.jpeg',
      description: 'Specialized machine for creating precise internal or external shapes using a toothed cutting tool, ideal for keyways, splines, and complex profiles.'
    }
  ];

}
