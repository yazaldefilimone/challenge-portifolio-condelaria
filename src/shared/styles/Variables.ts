export class Variables {
  hue: number;
  sat: string;
  lig: string;
  constructor() {
    this.hue = 207;
    this.sat = '90%';
    this.lig = '61%';
  }
  public theme() {
    return {
      colors: {
        firstColor: `hsl(${this.hue},${this.sat},${this.lig})`,
        firstColorAlt: `hsl(${this.hue},${this.sat} ,57%)`,
        titleColor: `hsl(${this.hue}, "12%", "15%")`,
        textColor: `hsl(${this.hue}, "12%", "45%")`,
        textColorLight: `hsl(${this.hue}, "8%", "75%")`,
        textColorLighten: `hsl(${this.hue}, "8%", "92%")`,
        bodyColor: `hsl(${this.hue}, "100%", "99%")`,
        containerColor: '#fff',
      },
      var: {
        hue: this.hue,
        sat: this.sat,
        lig: this.lig,
      },
      fonts: ['Poppins', 'sans-serif'],
      fontSizes: {
        h2: '1.5rem',
        h3: '1.25rem',
        normal: '1rem',
        small: '.875rem',
        smaller: '.813rem',
      },
    };
  }
}

export const theme = new Variables().theme();
