// Destination entity class for the Off-Season Travelers application

export class Destination {
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.continent = data.continent;
    this.country = data.country;
    this.state_province = data.state_province;
    this.city = data.city;
    this.is_national_park = data.is_national_park || false;
    this.off_season_months = data.off_season_months || [];
    this.best_off_season_month = data.best_off_season_month;
    this.off_season_highlights = data.off_season_highlights || [];
    this.average_temperature_range = data.average_temperature_range;
    this.typical_savings = data.typical_savings;
    this.image_url = data.image_url;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.created_date = data.created_date;
  }

  // Static methods for data operations
  static async list(orderBy = "-created_date", limit = null) {
    try {
      // For now, return mock data. In a real app, this would fetch from an API
      const mockDestinations = [
        new Destination({
          id: "1",
          name: "Bangkok, Thailand",
          description: "Experience Thailand's vibrant capital without the intense heat and crowds. Enjoy cooler temperatures, fewer tourists, and authentic local experiences.",
          continent: "asia",
          country: "Thailand",
          city: "Bangkok",
          is_national_park: false,
          off_season_months: ["november", "december", "january", "february"],
          best_off_season_month: "december",
          off_season_highlights: ["Cooler weather", "Fewer crowds", "Lower accommodation prices", "Local festival season"],
          average_temperature_range: "20-28°C",
          typical_savings: "40-50%",
          image_url: null,
          latitude: 13.7563,
          longitude: 100.5018
        }),
        new Destination({
          id: "2", 
          name: "Rome, Italy",
          description: "Discover the Eternal City's treasures without summer crowds. Enjoy comfortable walking weather and shorter queues at major attractions.",
          continent: "europe",
          country: "Italy",
          city: "Rome",
          is_national_park: false,
          off_season_months: ["november", "december", "january", "february", "march"],
          best_off_season_month: "february",
          off_season_highlights: ["Mild weather", "No crowds at Colosseum", "Lower hotel rates", "Authentic local atmosphere"],
          average_temperature_range: "8-15°C",
          typical_savings: "30-45%",
          image_url: null,
          latitude: 41.9028,
          longitude: 12.4964
        }),
        new Destination({
          id: "3",
          name: "Yellowstone National Park",
          description: "Experience America's first national park in winter wonderland. See geysers against snow, wildlife tracking, and peaceful landscapes.",
          continent: "north_america",
          country: "United States",
          state_province: "Wyoming",
          city: "Yellowstone",
          is_national_park: true,
          off_season_months: ["november", "december", "january", "february", "march"],
          best_off_season_month: "february",
          off_season_highlights: ["Winter wildlife", "Geysers in snow", "Cross-country skiing", "Fewer visitors"],
          average_temperature_range: "-15 to 5°C",
          typical_savings: "50-60%",
          image_url: null,
          latitude: 44.4280,
          longitude: -110.5885
        }),
        new Destination({
          id: "4",
          name: "Patagonia, Argentina",
          description: "Explore the dramatic landscapes of Patagonia during the southern hemisphere's autumn. Perfect hiking weather and stunning fall colors.",
          continent: "south_america",
          country: "Argentina",
          city: "El Calafate",
          is_national_park: false,
          off_season_months: ["march", "april", "may", "september", "october"],
          best_off_season_month: "april",
          off_season_highlights: ["Autumn colors", "Perfect hiking weather", "Fewer crowds", "Wildlife viewing"],
          average_temperature_range: "5-15°C",
          typical_savings: "35-50%",
          image_url: null,
          latitude: -50.0000,
          longitude: -72.0000
        }),
        new Destination({
          id: "5",
          name: "Morocco",
          description: "Experience Morocco's magic without the scorching summer heat. Perfect temperatures for exploring medinas and desert adventures.",
          continent: "africa",
          country: "Morocco",
          city: "Marrakech",
          is_national_park: false,
          off_season_months: ["november", "december", "january", "february", "march"],
          best_off_season_month: "january",
          off_season_highlights: ["Pleasant temperatures", "Clear desert skies", "Local hospitality", "Comfortable exploration"],
          average_temperature_range: "12-22°C",
          typical_savings: "40-55%",
          image_url: null,
          latitude: 31.6295,
          longitude: -7.9811
        }),
        new Destination({
          id: "6",
          name: "New Zealand",
          description: "Discover New Zealand's South Island during autumn. Stunning landscapes, perfect weather, and fewer crowds on hiking trails.",
          continent: "oceania",
          country: "New Zealand",
          city: "Queenstown",
          is_national_park: false,
          off_season_months: ["march", "april", "may", "september", "october"],
          best_off_season_month: "april",
          off_season_highlights: ["Autumn foliage", "Perfect hiking weather", "Lower accommodation costs", "Peaceful attractions"],
          average_temperature_range: "10-20°C",
          typical_savings: "30-40%",
          image_url: null,
          latitude: -45.0312,
          longitude: 168.6626
        })
      ];

      let filteredDestinations = mockDestinations;
      
      if (limit) {
        filteredDestinations = filteredDestinations.slice(0, limit);
      }

      return filteredDestinations;
    } catch (error) {
      console.error("Error fetching destinations:", error);
      return [];
    }
  }

  static async filter(filters = {}, orderBy = "-created_date") {
    try {
      const allDestinations = await this.list(orderBy);
      
      return allDestinations.filter(dest => {
        for (const [key, value] of Object.entries(filters)) {
          if (dest[key] !== value) {
            return false;
          }
        }
        return true;
      });
    } catch (error) {
      console.error("Error filtering destinations:", error);
      return [];
    }
  }

  static async findById(id) {
    try {
      const destinations = await this.list();
      return destinations.find(dest => dest.id === id) || null;
    } catch (error) {
      console.error("Error finding destination by ID:", error);
      return null;
    }
  }

  // Instance methods
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      continent: this.continent,
      country: this.country,
      state_province: this.state_province,
      city: this.city,
      is_national_park: this.is_national_park,
      off_season_months: this.off_season_months,
      best_off_season_month: this.best_off_season_month,
      off_season_highlights: this.off_season_highlights,
      average_temperature_range: this.average_temperature_range,
      typical_savings: this.typical_savings,
      image_url: this.image_url,
      latitude: this.latitude,
      longitude: this.longitude,
      created_date: this.created_date
    };
  }

  validate() {
    const errors = [];
    
    if (!this.name) errors.push("Name is required");
    if (!this.continent) errors.push("Continent is required");
    if (!this.country) errors.push("Country is required");
    if (!this.off_season_months || this.off_season_months.length === 0) {
      errors.push("Off-season months are required");
    }
    
    return errors;
  }
}