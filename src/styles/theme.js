export const lightTheme = {
    colors: {
        primary: '#f78620',    // Orange-red gradient start
        secondary: '#cd2a57',  // Deep red gradient end
        light: '#FFFFFF',      // White
        dark: '#111111',       // Dark for text contrast
        gray: '#666666',       // Gray for secondary text
        background: '#FFFFFF', // Main background
        cardBackground: '#FFFFFF', // Card backgrounds
        textPrimary: '#111111', // Primary text color
        textSecondary: '#666666', // Secondary text color
        border: 'rgba(247, 134, 32, 0.2)', // Border color
        shadow: 'rgba(247, 134, 32, 0.1)' // Shadow color
    },
    fonts: {
        heading: '"Space Grotesk", sans-serif',
        body: "'JetBrains Mono', monospace"
    },
    gradients: {
        primary: 'linear-gradient(135deg, #f78620 0%, #cd2a57 100%)',
        primaryReverse: 'linear-gradient(135deg, #cd2a57 0%, #f78620 100%)'
    }
};

export const darkTheme = {
    colors: {
        primary: '#f78620',    // Keep orange-red gradient
        secondary: '#cd2a57',  // Keep deep red
        light: '#111111',      // Dark background
        dark: '#FFFFFF',       // Light text
        gray: '#CCCCCC',       // Light gray for secondary text
        background: '#0a0a0a', // Very dark background
        cardBackground: '#1a1a1a', // Dark card backgrounds
        textPrimary: '#FFFFFF', // Light text
        textSecondary: '#CCCCCC', // Light gray text
        border: 'rgba(247, 134, 32, 0.3)', // Slightly brighter border
        shadow: 'rgba(0, 0, 0, 0.3)' // Dark shadow
    },
    fonts: {
        heading: '"Space Grotesk", sans-serif',
        body: "'JetBrains Mono', monospace"
    },
    gradients: {
        primary: 'linear-gradient(135deg, #f78620 0%, #cd2a57 100%)',
        primaryReverse: 'linear-gradient(135deg, #cd2a57 0%, #f78620 100%)'
    }
};

// Default theme (for backward compatibility)
export const theme = lightTheme; 