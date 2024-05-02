class URLShortener {
    constructor() {
      this.urlMap = new Map();
      this.chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      this.base = this.chars.length;
      this.shortLength = 6; // Customize the length if needed
    }
  
    encodeURL(longURL) {
      let identifier = this.generateIdentifier();
      this.urlMap.set(identifier, longURL);
      return this.convertToShortURL(identifier);
    }
  
    decodeURL(shortURL) {
      let identifier = this.extractIdentifier(shortURL);
      let longURL = this.urlMap.get(identifier);
      if (longURL) {
        // window.location.href = longURL;
      } else {
        console.error("Invalid short URL");
      }
    }
  
    generateIdentifier() {
      let identifier = '';
      for (let i = 0; i < this.shortLength; i++) {
        let randomIndex = Math.floor(Math.random() * this.base);
        identifier += this.chars[randomIndex];
      }
      return identifier;
    }
  
    convertToShortURL(identifier) {
      return `https://short.url/${identifier}`;
    }
  
    extractIdentifier(shortURL) {
      return shortURL.substring(shortURL.lastIndexOf('/') + 1);
    }
  }
  
  // Example usage:
  const shortener = new URLShortener();
  const longURL = "https://example.com/very/long/url";
  const shortURL = shortener.encodeURL(longURL);
  console.log("Shortened URL:", shortURL);
  shortener.decodeURL(shortURL);