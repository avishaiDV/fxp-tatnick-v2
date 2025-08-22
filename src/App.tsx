import React, { useState, useEffect } from 'react';
import { Copy, Eye, Palette, LogOut, LogIn, CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import './App.css';

interface TatNickStyle {
  text: string;
  color: string;
  backgroundColor: string;
  fontSize: number;
  fontWeight: number;
  fontStyle: 'normal' | 'italic';
  textDecoration: 'none' | 'underline' | 'line-through';
  textShadow: string;
  border: string;
  borderRadius: number;
  padding: number;
  margin: number;
  gradient: boolean;
  gradientColors: string[];
  glow: boolean;
  glowColor: string;
  fontFamily: string;
  specialEffect: 'none' | 'guystyle' | 'abir';
  // New advanced properties
  hasBackground: boolean;
  letterSpacing: number;
  lineHeight: number;
  opacity: number;
  transform: string;
  filter: string;
  textAlign: 'left' | 'center' | 'right';
  // Multi-color text support
  multiColor: boolean;
  textParts: Array<{
    text: string;
    color: string;
    styles?: Partial<TatNickStyle>;
  }>;
  // Border properties
  borderWidth: number;
  borderStyle: 'none' | 'solid' | 'dashed' | 'dotted' | 'double';
  borderColor: string;
  // Shadow properties
  shadowX: number;
  shadowY: number;
  shadowBlur: number;
  shadowColor: string;
  // Background gradient
  gradientDirection: number;
  gradientType: 'linear' | 'radial';
  
  // Advanced text effects
  textStroke: boolean;
  textStrokeWidth: number;
  textStrokeColor: string;
  textOutline: boolean;
  textOutlineWidth: number;
  textOutlineColor: string;
  
  // 3D and perspective effects
  perspective: boolean;
  perspectiveValue: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  scale: number;
  
  // Advanced shadows and glows
  innerShadow: boolean;
  innerShadowColor: string;
  innerShadowBlur: number;
  multipleShadows: boolean;
  shadowCount: number;
  
  // Text animations
  textAnimation: 'none' | 'bounce' | 'pulse' | 'shake' | 'wave' | 'typing' | 'rainbow';
  animationSpeed: 'slow' | 'normal' | 'fast';
  
  // Advanced borders
  borderGradient: boolean;
  borderGradientColors: string[];
  borderImage: boolean;
  borderImageUrl: string;
  
  // Text decorations
  textUnderline: boolean;
  textUnderlineColor: string;
  textUnderlineStyle: 'solid' | 'dashed' | 'dotted' | 'double' | 'wavy';
  textOverline: boolean;
  textOverlineColor: string;
  textLineThrough: boolean;
  textLineThroughColor: string;
  
  // Advanced backgrounds
  backgroundImage: boolean;
  backgroundImageUrl: string;
  backgroundBlend: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten';
  backgroundSize: 'auto' | 'cover' | 'contain';
  
  // Text spacing and layout
  wordSpacing: number;
  textIndent: number;
  whiteSpace: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  textOverflow: 'clip' | 'ellipsis' | 'string';
  
  // Advanced filters
  brightness: number;
  contrast: number;
  saturate: number;
  hueRotate: number;
  invert: number;
  sepia: number;
  blur: number;
  
  // Gradient text
  textGradient: boolean;
  textGradientColors: string[];
  textGradientDirection: number;
  
  // Text rotation and transform
  textRotation: number;
  textSkewX: number;
  textSkewY: number;
  
  // Advanced shadows
  doubleShadow: boolean;
  doubleShadowX: number;
  doubleShadowY: number;
  doubleShadowBlur: number;
  doubleShadowColor: string;
}

interface UserData {
  username: string;
  profileImage: string;
}

// User ranks mapping
const USER_RANKS = {
  'blueuser': 'מפקח',
  'red': 'מנהל',
  'banned': 'מורחק',
  'champ': 'צ\'אמפ',
  'glory': 'דרגת גלורי',
  'rebornmu': 'צוות MU',
  'winner': 'דרגת ווינר',
  'parlament': 'דרגת פרלמנט',
  'chairman': 'יו"ר הקהילה',
  'weekenduser': 'משתמש השבוע',
  'directoruser': 'חבר צוות תוכן',
  'contentdirector': 'עורך צוות תוכן',
  'menaelforum': 'מנהל לשעבר',
  'principaldirector': 'מנהל ראשי',
  'principaldirectorpast': 'מנהל ראשי לשעבר',
  'mankal': 'מנכ"ל',
  'mankalpast': 'מנכ"ל לשעבר',
  'respectuser': 'משתמש כבוד',
  'user_nick_s1': 'משתמש רגיל'
};

const App: React.FC = () => {
        const [tatNick, setTatNick] = useState<TatNickStyle>({
     text: 'משתמש רגיל',
     color: '#000000',
     backgroundColor: 'transparent',
     fontSize: 13,
     fontWeight: 400,
     fontStyle: 'normal',
     textDecoration: 'none',
     textShadow: 'none',
     border: 'none',
     borderRadius: 0,
     padding: 0,
     margin: 0,
     gradient: false,
     gradientColors: ['#ff5500', '#ffe600'],
     glow: false,
     glowColor: '#ff6b6b',
     fontFamily: 'inherit',
     specialEffect: 'none',
     // New properties
     hasBackground: false,
     letterSpacing: 0,
     lineHeight: 1,
     opacity: 1,
     transform: '',
     filter: '',
     textAlign: 'right',
     multiColor: false,
     textParts: [{ text: 'משתמש רגיל', color: '#000000' }],
     borderWidth: 0,
     borderStyle: 'none',
     borderColor: '#000000',
     shadowX: 0,
     shadowY: 0,
     shadowBlur: 0,
     shadowColor: '#000000',
     gradientDirection: 90,
     gradientType: 'linear',
     
     // Advanced text effects
     textStroke: false,
     textStrokeWidth: 1,
     textStrokeColor: '#000000',
     textOutline: false,
     textOutlineWidth: 1,
     textOutlineColor: '#000000',
     
     // 3D and perspective effects
     perspective: false,
     perspectiveValue: 1000,
     rotateX: 0,
     rotateY: 0,
     rotateZ: 0,
     scale: 1,
     
     // Advanced shadows and glows
     innerShadow: false,
     innerShadowColor: '#000000',
     innerShadowBlur: 5,
     multipleShadows: false,
     shadowCount: 2,
     
     // Text animations
     textAnimation: 'none',
     animationSpeed: 'normal',
     
     // Advanced borders
     borderGradient: false,
     borderGradientColors: ['#ff0000', '#00ff00'],
     borderImage: false,
     borderImageUrl: '',
     
     // Text decorations
     textUnderline: false,
     textUnderlineColor: '#000000',
     textUnderlineStyle: 'solid',
     textOverline: false,
     textOverlineColor: '#000000',
     textLineThrough: false,
     textLineThroughColor: '#000000',
     
     // Advanced backgrounds
     backgroundImage: false,
     backgroundImageUrl: '',
     backgroundBlend: 'normal',
     backgroundSize: 'auto',
     
     // Text spacing and layout
     wordSpacing: 0,
     textIndent: 0,
     whiteSpace: 'normal',
     textOverflow: 'clip',
     
     // Advanced filters
     brightness: 100,
     contrast: 100,
     saturate: 100,
     hueRotate: 0,
     invert: 0,
     sepia: 0,
     blur: 0,
     
     // Gradient text
     textGradient: false,
     textGradientColors: ['#ff5500', '#ffe600'],
     textGradientDirection: 90,
     
     // Text rotation and transform
     textRotation: 0,
     textSkewX: 0,
     textSkewY: 0,
     
     // Advanced shadows
     doubleShadow: false,
     doubleShadowX: 2,
     doubleShadowY: 2,
     doubleShadowBlur: 4,
     doubleShadowColor: '#000000'
   });

  const [showPreview, setShowPreview] = useState(true);
  const [copied, setCopied] = useState(false);
  const [importCode, setImportCode] = useState('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [selectedUserRank, setSelectedUserRank] = useState<keyof typeof USER_RANKS>('user_nick_s1');
  const [originalUserRank, setOriginalUserRank] = useState<keyof typeof USER_RANKS>('user_nick_s1');
  
  // Toast notifications
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  }>({
    show: false,
    message: '',
    type: 'info'
  });

     const MAX_CHARACTERS = 250;

  // Load user data from cookies on component mount
  useEffect(() => {
    const savedUsername = getCookie('username');
    if (savedUsername) {
      loadUser(savedUsername);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCookie = (name: string): string => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
    return '';
  };

  const createCookie = (name: string, value: string, days: number = 30) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `; expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}${expires}; path=/`;
  };

  const eraseCookie = (name: string) => {
    createCookie(name, '', -1);
  };

  const loadUser = async (username: string) => {
    setIsLoading(true);
    let timeoutId: NodeJS.Timeout | undefined;
    
    try {
      // Create AbortController for timeout
      const controller = new AbortController();
      timeoutId = setTimeout(() => controller.abort(), 60000); // 1 minute timeout
      
      const response = await fetch(`https://testfxp.netlify.app/.netlify/functions/hello?username=${username}`, {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.length > 0 && data[0] !== 'no result') {
        const user = data[0];
        
        // Extract user rank from username markup
        let userRank: keyof typeof USER_RANKS = 'user_nick_s1'; // default to regular user
        
        if (user.username && typeof user.username === 'string') {
          // Parse the username markup to extract the rank
          const markupMatch = user.username.match(/class="[^"]*usermarkup\s+([^"\s]+)/);
          if (markupMatch && markupMatch[1]) {
            const extractedRank = markupMatch[1];
            // Check if the extracted rank exists in our USER_RANKS
            if (extractedRank in USER_RANKS) {
              userRank = extractedRank as keyof typeof USER_RANKS;
            }
          }
        }
        
        setUserData({
          username: user.usernamenormal || username,
          profileImage: user.profilepic && user.profilepic !== 0 ? `https://i.imagesup.co${user.profilepic}` : 'https://static.fcdn.co.il/dyn/projects/privatemessage/icons/usericonprofile.svg'
        });
        
        // Update the selected user rank and save original
        setSelectedUserRank(userRank);
        setOriginalUserRank(userRank);
        
        setShowLoginPopup(false);
        setLoginUsername('');
      } else {
        // User not found
        showToast('לא ניתן להתחבר למשתמש זה. אנא נסה שם משתמש אחר.', 'error');
        setUserData(null);
      }
    } catch (error) {
      if (timeoutId) clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        showToast('שגיאת חיבור: ה-API לא הגיב תוך דקה. אנא נסה שוב.', 'error');
      } else {
        console.error('Error loading user:', error);
        showToast('שגיאה בחיבור ל-API. אנא נסה שוב.', 'error');
      }
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserLogin = () => {
    setShowLoginPopup(true);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginUsername.trim()) {
      createCookie('username', loginUsername.trim());
      loadUser(loginUsername.trim());
    }
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'info' }), 4000);
  };

  const resetToOriginalRank = () => {
    setSelectedUserRank(originalUserRank);
    showToast(`חזרת לדרגה המקורית: ${USER_RANKS[originalUserRank]}`, 'info');
  };

  const handleUserLogout = () => {
    eraseCookie('username');
    setUserData(null);
    setSelectedUserRank('user_nick_s1'); // חזרה למשתמש רגיל
    setOriginalUserRank('user_nick_s1'); // איפוס דרגה מקורית
  };

        const generateHTML = (): string => {
     // Handle special effects - but allow additional styling
     const styles: string[] = [];
     
     // Add styles that are not default values (even for special effects)
     if (tatNick.color !== '#000000') styles.push(`color: ${tatNick.color}`);
     if (tatNick.fontSize !== 13) styles.push(`font-size: ${tatNick.fontSize}px`);
     if (tatNick.fontWeight !== 400) styles.push(`font-weight: ${tatNick.fontWeight}`);
     if (tatNick.fontStyle !== 'normal') styles.push(`font-style: ${tatNick.fontStyle}`);
     if (tatNick.textDecoration !== 'none') styles.push(`text-decoration: ${tatNick.textDecoration}`);
     if (tatNick.fontFamily !== 'inherit') styles.push(`font-family: ${tatNick.fontFamily}, sans-serif`);
     if (tatNick.letterSpacing !== 0) styles.push(`letter-spacing: ${tatNick.letterSpacing}px`);
     if (tatNick.lineHeight !== 1) styles.push(`line-height: ${tatNick.lineHeight}`);
     if (tatNick.opacity !== 1) styles.push(`opacity: ${tatNick.opacity}`);
     if (tatNick.textAlign !== 'right') styles.push(`text-align: ${tatNick.textAlign}`);
     
     // Word spacing
     if (tatNick.wordSpacing !== 0) styles.push(`word-spacing: ${tatNick.wordSpacing}px`);
     
     // Text transform
     if (tatNick.transform && tatNick.transform.includes('text-transform')) {
       styles.push(tatNick.transform);
     }
     
     // Text indent
     if (tatNick.textIndent !== 0) styles.push(`text-indent: ${tatNick.textIndent}px`);
     
     // White space
     if (tatNick.whiteSpace !== 'normal') styles.push(`white-space: ${tatNick.whiteSpace}`);
     
     // Advanced text effects
     const filterEffects: string[] = [];
     if (tatNick.blur > 0) filterEffects.push(`blur(${tatNick.blur}px)`);
     if (tatNick.brightness !== 100) filterEffects.push(`brightness(${tatNick.brightness}%)`);
     if (tatNick.contrast !== 100) filterEffects.push(`contrast(${tatNick.contrast}%)`);
     if (tatNick.saturate !== 100) filterEffects.push(`saturate(${tatNick.saturate}%)`);
     if (tatNick.hueRotate !== 0) filterEffects.push(`hue-rotate(${tatNick.hueRotate}deg)`);
     if (tatNick.invert !== 0) filterEffects.push(`invert(${tatNick.invert}%)`);
     if (tatNick.sepia !== 0) filterEffects.push(`sepia(${tatNick.sepia}%)`);
     
     if (filterEffects.length > 0) {
       styles.push(`filter: ${filterEffects.join(' ')}`);
     }
     
     // Background handling
     if (tatNick.hasBackground) {
       if (tatNick.gradient) {
         const direction = tatNick.gradientType === 'linear' ? `${tatNick.gradientDirection}deg` : 'circle';
         styles.push(`background: ${tatNick.gradientType}-gradient(${direction}, ${tatNick.gradientColors.join(', ')})`);
       } else if (tatNick.backgroundColor !== 'transparent') {
         styles.push(`background: ${tatNick.backgroundColor}`);
       }
     }

     // Border handling
     if (tatNick.borderWidth > 0) {
       styles.push(`border: ${tatNick.borderWidth}px ${tatNick.borderStyle} ${tatNick.borderColor}`);
     }

     // Shadow and glow handling
     const shadowEffects: string[] = [];
     
     // Text shadow
     if (tatNick.shadowX !== 0 || tatNick.shadowY !== 0 || tatNick.shadowBlur !== 0) {
       shadowEffects.push(`${tatNick.shadowX}px ${tatNick.shadowY}px ${tatNick.shadowBlur}px ${tatNick.shadowColor}`);
     }
     
     // Text glow (using text-shadow)
     if (tatNick.glow) {
       shadowEffects.push(`0 0 10px ${tatNick.glowColor}`);
       shadowEffects.push(`0 0 20px ${tatNick.glowColor}`);
       shadowEffects.push(`0 0 30px ${tatNick.glowColor}`);
     }
     
     // Text stroke (outline effect using text-shadow)
     if (tatNick.textStroke && tatNick.textStrokeWidth > 0) {
       // Create multiple text-shadows for outline effect
       for (let i = -tatNick.textStrokeWidth; i <= tatNick.textStrokeWidth; i++) {
         for (let j = -tatNick.textStrokeWidth; j <= tatNick.textStrokeWidth; j++) {
           if (i !== 0 || j !== 0) {
             shadowEffects.push(`${i}px ${j}px 0 ${tatNick.textStrokeColor}`);
           }
         }
       }
     }
     
     // Double shadow effect
     if (tatNick.doubleShadow) {
       shadowEffects.push(`${tatNick.doubleShadowX}px ${tatNick.doubleShadowY}px ${tatNick.doubleShadowBlur}px ${tatNick.doubleShadowColor}`);
       shadowEffects.push(`${tatNick.doubleShadowX * 2}px ${tatNick.doubleShadowY * 2}px ${tatNick.doubleShadowBlur * 1.5}px ${tatNick.doubleShadowColor}`);
     }
     
     if (shadowEffects.length > 0) {
       styles.push(`text-shadow: ${shadowEffects.join(', ')}`);
     }

     // Box shadow for glow effect on background
     if (tatNick.glow && tatNick.hasBackground) {
       styles.push(`box-shadow: 0 0 15px ${tatNick.glowColor}`);
     }
     
     // Text gradient
     if (tatNick.textGradient) {
       const gradientDirection = `${tatNick.textGradientDirection}deg`;
       styles.push(`background: linear-gradient(${gradientDirection}, ${tatNick.textGradientColors.join(', ')})`);
       styles.push(`-webkit-background-clip: text`);
       styles.push(`-webkit-text-fill-color: transparent`);
       styles.push(`background-clip: text`);
     }
     
     // Text rotation and transform
     const transforms: string[] = [];
     if (tatNick.textRotation !== 0) transforms.push(`rotate(${tatNick.textRotation}deg)`);
     if (tatNick.textSkewX !== 0) transforms.push(`skewX(${tatNick.textSkewX}deg)`);
     if (tatNick.textSkewY !== 0) transforms.push(`skewY(${tatNick.textSkewY}deg)`);
     
     if (transforms.length > 0) {
       styles.push(`transform: ${transforms.join(' ')}`);
     }

     // Add other styles only if they're not default
     if (tatNick.borderRadius !== 0) styles.push(`border-radius: ${tatNick.borderRadius}px`);
     if (tatNick.padding !== 0) styles.push(`padding: ${tatNick.padding}px`);
     if (tatNick.margin !== 0) styles.push(`margin: ${tatNick.margin}px`);
     

     // Handle special effects with additional styling
     if (tatNick.specialEffect === 'guystyle') {
       const classString = 'guystyle';
       const content = tatNick.multiColor ? generateMultiColorText() : (tatNick.text || 'משתמש FXP');
       const styleString = styles.join('; ');
       const styleAttr = styleString ? ` style="${styleString}"` : '';
       return `<span class="${classString}"${styleAttr}>${content}</span>`;
     }
     
     if (tatNick.specialEffect === 'abir') {
       const classString = 'abir';
       const content = tatNick.multiColor ? generateMultiColorText() : (tatNick.text || 'משתמש FXP');
       const styleString = styles.join('; ');
       const styleAttr = styleString ? ` style="${styleString}"` : '';
       return `<span class="${classString}"${styleAttr}>${content}</span>`;
     }

     // Determine classes based on user rank (only for normal effects)
     const classes: string[] = [];
     
     // Only add 'tih' class if NOT a regular user and NOT special effect
     if (selectedUserRank !== 'user_nick_s1') {
       classes.push('tih');
     }
     
     if (['red'].includes(selectedUserRank)) {
       classes.push('mo');
     }
     
     if (['blueuser', 'principaldirector', 'mankal', 'respectuser', 'menaelforum', 'principaldirectorpast', 'mankalpast'].includes(selectedUserRank)) {
       classes.push('mf');
     }
     
     if (['parlament'].includes(selectedUserRank)) {
       classes.push('at2');
     }

     const classString = classes.length > 0 ? classes.join(' ') : '';
     const content = tatNick.multiColor ? generateMultiColorText() : (tatNick.text || 'משתמש FXP');
     
     // If no styles and no classes, return simple span
     if (styles.length === 0 && !classString) {
       return `<span>${content}</span>`;
     }

     const styleString = styles.join('; ');
     const classAttr = classString ? ` class="${classString}"` : '';
     const styleAttr = styleString ? ` style="${styleString}"` : '';
     
     return `<span${classAttr}${styleAttr}>${content}</span>`;
   };

     const generateMultiColorText = (): string => {
    return tatNick.textParts.map(part => 
      `<font color="${part.color}">${part.text || 'משתמש FXP'}</font>`
    ).join('');
  };

     const addTextPart = () => {
    // Check if already have 2 colors (maximum allowed)
    if (tatNick.textParts.length >= 2) {
      showToast('לא ניתן להוסיף יותר מ-2 צבעים. המקסימום הוא 2 צבעים בלבד.', 'error');
      return;
    }
    
    // Check if adding a new part would exceed 250 characters
    const testHTML = generateHTML();
    const newPartHTML = `<font color="#000000">טקסט חדש</font>`;
    
    if ((testHTML + newPartHTML).length > 250) {
      showToast('הוספת חלק טקסט נוסף תחרוג מ-250 תווים. אנא קצר את הטקסט הקיים תחילה.', 'error');
      return;
    }
    
    setTatNick(prev => ({
      ...prev,
      textParts: [...prev.textParts, { text: 'טקסט חדש', color: '#000000' }]
    }));
  };

   const removeTextPart = (index: number) => {
     setTatNick(prev => ({
       ...prev,
       textParts: prev.textParts.filter((_, i) => i !== index)
     }));
   };

     const updateTextPart = (index: number, updates: Partial<typeof tatNick.textParts[0]>) => {
    // Check if updating this part would exceed 250 characters
    const currentParts = [...tatNick.textParts];
    const updatedPart = { ...currentParts[index], ...updates };
    currentParts[index] = updatedPart;
    
    // Create test HTML to check length
    const testHTML = currentParts.map(part => 
      `<font color="${part.color}">${part.text}</font>`
    ).join('');
    
    if (testHTML.length > 250) {
      showToast('עדכון הטקסט תחרוג מ-250 תווים. אנא קצר את הטקסט.', 'error');
      return;
    }
    
    setTatNick(prev => ({
      ...prev,
      textParts: prev.textParts.map((part, i) => 
        i === index ? { ...part, ...updates } : part
      )
    }));
  };

     const toggleMultiColor = () => {
    if (!tatNick.multiColor) {
      // Split text into two parts (maximum 2 colors)
      const text = tatNick.text || 'משתמש FXP';
      const midPoint = Math.ceil(text.length / 2);
      
      // Check if this would exceed 250 characters
      const testHTML = `<span style="color: ${tatNick.color}">${text.substring(0, midPoint)}<font color="#ff0000">${text.substring(midPoint)}</font></span>`;
      
      if (testHTML.length > 250) {
        showToast('הפעלת תת ניק עם 2 צבעים תחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
        return;
      }
      
      setTatNick(prev => ({
        ...prev,
        multiColor: true,
        textParts: [
          { text: text.substring(0, midPoint), color: prev.color },
          { text: text.substring(midPoint), color: '#ff0000' }
        ]
      }));
    } else {
      // Merge all parts back to single text
      const fullText = tatNick.textParts.map(part => part.text).join('');
      setTatNick(prev => ({
        ...prev,
        multiColor: false,
        text: fullText,
        textParts: [{ text: fullText, color: prev.color }]
      }));
    }
  };

   // Calculate current length after generateHTML is defined
   const currentLength = generateHTML().length;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateHTML());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const importFromCode = () => {
    try {
      // Validate code length
      if (importCode.length > 250) {
        showToast('הקוד חורג מ-250 תווים. אנא קצר את הקוד.', 'error');
        return;
      }

      // Validate that it's only span tags
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = importCode.trim();
      
      // Check if it contains only span and font elements (for multi-color text)
      const allElements = tempDiv.querySelectorAll('*');
      for (let element of allElements) {
        const tagName = element.tagName.toLowerCase();
        if (tagName !== 'span' && tagName !== 'font') {
          showToast('הקוד חייב להכיל רק תגיות span ו-font בלבד.', 'error');
          return;
        }
      }

      const mainSpan = tempDiv.querySelector('span');
      
      if (!mainSpan) {
        showToast('לא נמצא תג span תקין בקוד.', 'error');
        return;
      }

      // Parse styles from the main span
      const style = mainSpan.style;
      const classNames = mainSpan.className.split(' ').filter(c => c);
      
      // Check for special effects
      let specialEffect: 'none' | 'guystyle' | 'abir' = 'none';
      if (classNames.includes('guystyle')) {
        specialEffect = 'guystyle';
      } else if (classNames.includes('abir')) {
        specialEffect = 'abir';
      }

      // Parse multi-color text (support both span and font tags)
      const innerSpans = mainSpan.querySelectorAll('span');
      const innerFonts = mainSpan.querySelectorAll('font');
      const textParts: Array<{text: string; color: string}> = [];
      const multiColor = innerSpans.length > 0 || innerFonts.length > 0;

      if (multiColor) {
        // Get the main text color from the span
        const mainColor = style.color || '#000000';
        
        // Process all child nodes to handle mixed content (text + font tags)
        const childNodes = Array.from(mainSpan.childNodes);
        
        childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            // This is text content
            const text = node.textContent?.trim();
            if (text) {
              textParts.push({
                text: text,
                color: mainColor
              });
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            // This is an element (font, span, etc.)
            const element = node as Element;
            if (element.tagName.toLowerCase() === 'font') {
              textParts.push({
                text: element.textContent || '',
                color: element.getAttribute('color') || mainColor
              });
            } else if (element.tagName.toLowerCase() === 'span') {
              const htmlElement = element as HTMLElement;
              textParts.push({
                text: element.textContent || '',
                color: htmlElement.style.color || mainColor
              });
            }
          }
        });
      }

      // Parse all CSS properties
      const newNickname: Partial<TatNickStyle> = {
        text: multiColor ? (mainSpan.textContent || '') : (mainSpan.textContent || ''),
        color: style.color || '#000000',
        backgroundColor: style.backgroundColor || 'transparent',
        fontSize: parseInt(style.fontSize) || 13,
        fontWeight: parseInt(style.fontWeight) || 400,
        fontStyle: (style.fontStyle as any) || 'normal',
        textDecoration: (style.textDecoration as any) || 'none',
        fontFamily: style.fontFamily || 'inherit',
        letterSpacing: parseInt(style.letterSpacing) || 0,
        lineHeight: parseFloat(style.lineHeight) || 1,
        opacity: parseFloat(style.opacity) || 1,
        transform: style.transform || '',
        filter: style.filter || '',
        textAlign: (style.textAlign as any) || 'right',
        borderRadius: parseInt(style.borderRadius) || 0,
        padding: parseInt(style.padding) || 0,
        margin: parseInt(style.margin) || 0,
        specialEffect,
        multiColor,
        textParts: multiColor ? textParts : [{ text: mainSpan.textContent || '', color: style.color || '#000000' }],
        hasBackground: style.backgroundColor !== '' && style.backgroundColor !== 'transparent',
        
        // Parse border
        borderWidth: parseInt(style.borderWidth) || 0,
        borderStyle: (style.borderStyle as any) || 'none',
        borderColor: style.borderColor || '#000000',
        
        // Parse shadow
        shadowX: 0,
        shadowY: 0,
        shadowBlur: 0,
        shadowColor: '#000000'
      };

      // Parse text-shadow
      if (style.textShadow && style.textShadow !== 'none') {
        const shadowMatch = style.textShadow.match(/(-?\d+)px\s+(-?\d+)px\s+(\d+)px\s+(.+)/);
        if (shadowMatch) {
          newNickname.shadowX = parseInt(shadowMatch[1]);
          newNickname.shadowY = parseInt(shadowMatch[2]);
          newNickname.shadowBlur = parseInt(shadowMatch[3]);
          newNickname.shadowColor = shadowMatch[4];
        }
      }

      setTatNick(prev => ({ 
        ...prev, 
        ...newNickname,
        // Ensure new properties have default values
        textGradient: newNickname.textGradient || false,
        textGradientColors: newNickname.textGradientColors || ['#ff5500', '#ffe600'],
        textGradientDirection: newNickname.textGradientDirection || 90,
        textRotation: newNickname.textRotation || 0,
        textSkewX: newNickname.textSkewX || 0,
        textSkewY: newNickname.textSkewY || 0,
        doubleShadow: newNickname.doubleShadow || false,
        doubleShadowX: newNickname.doubleShadowX || 2,
        doubleShadowY: newNickname.doubleShadowY || 2,
        doubleShadowBlur: newNickname.doubleShadowBlur || 4,
        doubleShadowColor: newNickname.doubleShadowColor || '#000000'
      }));
      setImportCode('');
      showToast('הקוד יובא בהצלחה!', 'success');
      
    } catch (error) {
      showToast('שגיאה בייבוא הקוד. אנא ודא שהקוד תקין.', 'error');
    }
  };

        const resetToDefault = () => {
     setTatNick({
       text: 'משתמש רגיל',
       color: '#000000',
       backgroundColor: 'transparent',
       fontSize: 13,
       fontWeight: 400,
       fontStyle: 'normal',
       textDecoration: 'none',
       textShadow: 'none',
       border: 'none',
       borderRadius: 0,
       padding: 0,
       margin: 0,
       gradient: false,
       gradientColors: ['#ff5500', '#ffe600'],
       glow: false,
       glowColor: '#ff6b6b',
       fontFamily: 'inherit',
       specialEffect: 'none',
       hasBackground: false,
       letterSpacing: 0,
       lineHeight: 1,
       opacity: 1,
       transform: '',
       filter: '',
       textAlign: 'right',
       multiColor: false,
       textParts: [{ text: 'משתמש רגיל', color: '#000000' }],
       borderWidth: 0,
       borderStyle: 'none',
       borderColor: '#000000',
       shadowX: 0,
       shadowY: 0,
       shadowBlur: 0,
       shadowColor: '#000000',
       gradientDirection: 90,
       gradientType: 'linear',
       
       // Advanced text effects
       textStroke: false,
       textStrokeWidth: 1,
       textStrokeColor: '#000000',
       textOutline: false,
       textOutlineWidth: 1,
       textOutlineColor: '#000000',
       
       // 3D and perspective effects
       perspective: false,
       perspectiveValue: 1000,
       rotateX: 0,
       rotateY: 0,
       rotateZ: 0,
       scale: 1,
       
       // Advanced shadows and glows
       innerShadow: false,
       innerShadowColor: '#000000',
       innerShadowBlur: 5,
       multipleShadows: false,
       shadowCount: 2,
       
       // Text animations
       textAnimation: 'none',
       animationSpeed: 'normal',
       
       // Advanced borders
       borderGradient: false,
       borderGradientColors: ['#ff0000', '#00ff00'],
       borderImage: false,
       borderImageUrl: '',
       
       // Text decorations
       textUnderline: false,
       textUnderlineColor: '#000000',
       textUnderlineStyle: 'solid',
       textOverline: false,
       textOverlineColor: '#000000',
       textLineThrough: false,
       textLineThroughColor: '#000000',
       
       // Advanced backgrounds
       backgroundImage: false,
       backgroundImageUrl: '',
       backgroundBlend: 'normal',
       backgroundSize: 'auto',
       
       // Text spacing and layout
       wordSpacing: 0,
       textIndent: 0,
       whiteSpace: 'normal',
       textOverflow: 'clip',
       
       // Advanced filters
       brightness: 100,
       contrast: 100,
       saturate: 100,
       hueRotate: 0,
       invert: 0,
       sepia: 0,
       blur: 0,
       
       // Gradient text
       textGradient: false,
       textGradientColors: ['#ff5500', '#ffe600'],
       textGradientDirection: 90,
       
       // Text rotation and transform
       textRotation: 0,
       textSkewX: 0,
       textSkewY: 0,
       
       // Advanced shadows
       doubleShadow: false,
       doubleShadowX: 2,
       doubleShadowY: 2,
       doubleShadowBlur: 4,
       doubleShadowColor: '#000000'
     });
   };

  // Removed unused fxpPreviewStyle

  // Generate FXP Comment Preview HTML
  const generateFXPCommentPreview = () => {
    return `
      <!DOCTYPE html>
      <html lang="he">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=100">
          <base href=""><!--[if IE]></base><![endif]-->
          <link rel="shortcut icon" href="favicon.ico">
          <link rel="apple-touch-icon" href="https://static.fcdn.co.il/css_static_main/logo512.png">
          <meta property="og:type" content="article">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/variables.css?v0.02=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/components/fxp_fonts.css?v0.4=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/areas/editor.css?v0.02=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/mainfxp.css?v0.21=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/components/fxp_buttons.css?v0.05=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/components/fxp_menus.css?v0.10=4120.518">
          <link rel="stylesheet" href="https://static.fcdn.co.il/dyn/projects/css/usermarkup.css?v1.10=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/css-library.css?v0.06=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/header_2020.css?v1.31=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/forumhome_2020.css?v3.25=4120.518">
          <link href="https://www.fxp.co.il/clientscript/awesome/css/font-awesome.min.css" rel="stylesheet">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/showthread-10.6.css?v1.712=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/desktopshowthread/d_thread_n1.css?v2.315=4120.518">
          <style>
          .wallavideo{
            width:640px;
            height:385px;
          }
          div.wysiwyg_block > .blockbody.formcontrols {
            box-shadow: none !important;
            padding-top: 0 !important;
            background: unset !important;
          }
          .content {
            font-family: var(--fxp-font-family);
          }
          html {
            scroll-padding-top: 70px;
          }
          body {
            margin: 0;
            padding: 0;
            background: #fff;
            transform-origin: top left;
            transform: scale(var(--scale-factor, 1));
            width: calc(100% / var(--scale-factor, 1));
            height: calc(100% / var(--scale-factor, 1));
          }
          .userinfo {
            width: 978px !important;
            min-width: 978px !important;
          }
          </style>
        </head>
        <body>
          <div id="postlist" class="postlist restrain">
            <ol id="posts" class="posts" start="1">
              <li class="postbit postbitim postcontainer" id="post_224559732">
                <div class="userinfo" style="width:978px">
                  <div class="user-picture-holder" data-user-id="1195305">
                    <div class="user_pic_1195305">
                      <img src="${userData?.profileImage || 'https://static.fcdn.co.il/dyn/projects/privatemessage/icons/usericonprofile.svg'}" alt="הסמל האישי של${userData?.username || 'משתמש מנותק'}" title="הסמל האישי של${userData?.username || 'משתמש מנותק'}" data-ll-status="loading" class="loading">
                    </div>
                  </div>
                  <div style="position:absolute; font-size:12px; font-weight:bold; text-align:left; color:#6D6D6D; left:10px;">
                    <div style="float:left; padding: 3px 20px 3px 18px; background: url(https://static.fcdn.co.il/images_new/postsm.svg) no-repeat left; background-size: 16px;">19,257</div>
                    <div style="float:left; padding: 3px 20px 3px 18px; background: url(https://static.fcdn.co.il/images_new/lovered.svg) no-repeat left; background-size: 16px; height:14px;">4,089</div>
                    <div style="float:left; padding: 3px 20px 3px 18px; background: url(https://static.fcdn.co.il/images_new/date.svg) no-repeat left; background-size: 16px; height:14px;">07-10-16</div>
                    <div style="float:left; padding: 3px 20px 3px 18px; background: url(https://static.fcdn.co.il/images_new/male-m.svg) no-repeat left; background-size: 16px; height:14px;">${userData?.username || 'משתמש מנותק'}</div>
                    <div class="postfollow hidefollow">
                      <span class="counter">16</span>
                      <div class="follow-btn noselectea" data-followid="1195305">
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div class="damamakabim" style="width: 30px;">
                    <img src="https://i.imagesup.co/images2/07bfbe6acc4e979900a3b39999732b52ca3e2efb.png" alt="למען אחינו ואחיותינו החטופים בעזה" style="width: 22px; position: absolute; right: 45px; z-index: 9;" title="למען אחינו ואחיותינו החטופים בעזה" data-ll-status="loading" class="loading">
                  </div>
                  <div class="contact">
                    <div class="posthead-date">
                      <span class="date">היום 18:41</span>
                      <a name="" class="postcounter">#3</a>
                    </div>
                    <div class="username_container">
                      <div class="popupmenu memberaction" id="yui-gen12">
                        <a class="username offline popupctrl" title="${userData?.username || 'משתמש מנותק'} מנותק" id="yui-gen14">
                          <strong><span class="usermarkup ${selectedUserRank}">${userData?.username || 'משתמש מנותק'}</span></strong>
                        </a>
                        <ul class="popupbody memberaction_body" id="yui-gen13">
                          <li class="left">
                            <img src="https://fxp.co.il/clear.gif" class="sp_show showth-profile" alt="" data-ll-status="observed">
                            <a>צפה בפרופיל</a>
                          </li>
                          <li class="right">
                            <img src="https://fxp.co.il/clear.gif" class="sp_show showth-forum" alt="" data-ll-status="observed">
                            <a rel="nofollow">חפש הודעות</a>
                          </li>
                          <li class="left">
                            <img src="https://fxp.co.il/clear.gif" class="sp_show showth-message" alt="" data-ll-status="observed">
                            <a rel="nofollow">הודעה פרטית</a>
                          </li>
                        </ul>
                      </div>
                      <img class="inlineimg onlinestatus loading" src="https://fxp.co.il/clear.gif" alt="${userData?.username || 'משתמש מנותק'} מנותק" border="0" style="background-color: #A8A8A8;" title="${userData?.username || 'משתמש מנותק'} מנותק" data-ll-status="loading">
                      <span class="usertitle">
                        ${generateHTML()}
                      </span>
                      <div class="imlinks"></div>
                    </div>
                  </div>
                  <div class="userinfo_extra">
                    <div style="float:right; padding:4px 10px; display:none"></div>
                    <dl class="userstats-new" style="display:none">
                      <dt>תאריך הצטרפות</dt> <dd>07-10-16</dd>
                      <dt>שם פרטי</dt> <dd>אבישי</dd>
                      <dt>הודעות</dt> <dd>19,257</dd>
                    </dl>
                  </div>
                </div>
                <div class="postbody" style="background-color: rgb(250, 250, 250);">
                  <div class="postrow">
                    <div class="content" style="">
                      <div id="post_message_224559732">
                        <blockquote class="postcontent restore">הודעת משתמש לדוגמה</blockquote>
                      </div>
                    </div>
                    <blockquote class="signature restore"></blockquote>
                  </div>
                </div>
                <div class="postfoot">
                  <div class="textcontrols floatcontainer">
                    <span class="postcontrols">
                      <img style="display:none" id="progress_224559732" src="https://static.fcdn.co.il/images_new/misc/progress.gif" alt="" data-ll-status="observed">
                    </span>
                    <div class="button-like-holder" style="margin-right: 5px;">
                      <span class="addlike noselectea _540c806b208b2c13f7f9fbf493cedf7c" id="224559732_addlike">אהבתי</span>
                      <span id="wholikes_224559732" class="popupmenu">
                        <span style="cursor: pointer;" id="who_slike_224559732" onclick="showmorelike(this.id);" class="countlike" rel="nofollow">0</span>
                        <div id="wholikesname_224559732" style="min-width: 100px;" class="popupbody">
                          <span style="cursor: pointer;" id="224559732_morelikes" onclick="showmorelike(this.id);">הצג עוד</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <hr>
              </li>
            </ol>
          </div>
        </body>
      </html>
    `;
  };

  // Generate FXP Profile Preview HTML
  const generateFXPProfilePreview = () => {
    return `
      <!DOCTYPE html>
      <html lang="he">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta id="e_vb_meta_bburl" name="vb_meta_bburl" content="https://www.fxp.co.il">
          <meta http-equiv="X-UA-Compatible" content="IE=100">
          <base href="//www.fxp.co.il"><!--[if IE]></base><![endif]-->
          <link rel="shortcut icon" href="favicon.ico">
          <link rel="apple-touch-icon" href="https://static.fcdn.co.il/css_static_main/logo512.png">
          <meta name="generator" content="vBulletin 4.2.3">
          <meta name="keywords" content="FXP,פורום,פורומים,fxp,משחקים,סרטים,כיף,רשת,מחשבים,הורדות,הורדה,סרגל כלים,בדיקת IP,העלאת תמונות">
          <meta name="description" content="מחפשים אתר פורומים ?  אתר FXP מכיל קהילות פורומים, משחקים, תמונות גולשים ועוד. הכנסו עכשיו אל קהילות הפורומים של FXP">
          <meta property="fb:app_id" content="415294715208536">
          <meta property="og:site_name" content="FXP">
          <meta property="og:description" content="מחפשים אתר פורומים ?  אתר FXP מכיל קהילות פורומים, משחקים, תמונות גולשים ועוד. הכנסו עכשיו אל קהילות הפורומים של FXP">
          <meta property="og:url" content="https://www.fxp.co.il">
          <meta property="og:type" content="website">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/variables.css?v0.02=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/components/fxp_fonts.css?v0.4=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/areas/editor.css?v0.02=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/mainfxp.css?v0.21=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/components/fxp_buttons.css?v0.05=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/components/fxp_menus.css?v0.10=4120.518">
          <link rel="stylesheet" href="https://static.fcdn.co.il/dyn/projects/css/usermarkup.css?v1.10=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/css-library.css?v0.06=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/header_2020.css?v1.31=4120.518">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/forumhome_2020.css?v3.25=4120.518">
          <link href="https://www.fxp.co.il/clientscript/awesome/css/font-awesome.min.css" rel="stylesheet">
          <style>
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: transparent !important;
            overflow: hidden !important;
            min-width: 0px !important;
            max-width: none !important;
            width: auto !important;
          }
          .profile_widgets {
            margin: 0 !important;
            padding: 0 !important;
            background: transparent !important;
            min-width: 0px !important;
            max-width: none !important;
            width: auto !important;
          }
          .block, .mainblock, .moduleinactive_bg {
            min-width: 0px !important;
            max-width: none !important;
            width: auto !important;
          }
          .wallavideo{
          width:640px;
          height:385px;
          }
          </style>

          <style>
          div.wysiwyg_block > .blockbody.formcontrols {
          box-shadow: none !important;
          padding-top: 0 !important;
          background: unset !important;
          }
          </style>
          <title>צפה בפרופיל: ${userData?.username || 'משתמש מנותק'} - FXP</title>
          <link rel="canonical" href="https://www.fxp.co.il/member.php?u=1195305">
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/css_static/memberinfo-rollup.css?d=1707075155">
          <style type="text/css"></style>
          <!--[if lt IE 8]><link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/css_static/sidebar-ie.css?d=1707075155" />
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/css_static/member-ie.css?d=1707075155" />
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/css_static/postbit-lite-ie.css?d=1707075155" /><![endif]-->
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/css_static/userpro.css?v=1.0">
          <!-- Facebook Pixel Code -->
          <link rel="stylesheet" type="text/css" href="https://static.fcdn.co.il/dyn/projects/css/desktop/memberinfo.css?v1.7=4120.518">
        </head>
        <body>
          <div class="profile_widgets member_summary userprof_moduleinactive userprof_moduleinactive_border" id="sidebar_container">
            <div class="block mainblock moduleinactive_bg">
              <h1 class="blocksubhead prof_blocksubhead">
                <span id="userinfo">
                  <span class="member_username"><span class="usermarkup ${selectedUserRank}">${userData?.username || 'משתמש מנותק'}</span></span>
                  <span class="member_status"><img class="inlineimg onlinestatus loading" src="https://fxp.co.il/clear.gif" alt="${userData?.username || 'משתמש מנותק'} מחובר/ת כרגע" border="0" style="background-color: #9BDC00;" title="${userData?.username || 'משתמש מנותק'} מחובר/ת כרגע" data-ll-status="loading">
                  </span>
                                     <br>
                   <span class="usertitle">${generateHTML()}</span>
                 </span>
               </h1>
               <div id="userinfoblock" class="floatcontainer">
                                  <div class="avatar" title="${userData?.username || 'משתמש מנותק'} תמונה">
                    <div class="avatarcontainer">
                      <img src="${userData?.profileImage || 'https://static.fcdn.co.il/dyn/projects/privatemessage/icons/usericonprofile.svg'}" data-ll-status="loading" class="loading">
                    </div>
                  </div>
               </div>
            </div>
            <!-- stats_mini -->
            
            <div class="underblock"></div>
            <!-- / stats_mini -->
          </div>
        </body>
      </html>
    `;
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>🎨 מחולל תת ניק FXP v2</h1>
        <p>צור תת ניק מותאם אישית לפורום FXP עם עיצוב ייחודי</p>
        <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
          © 2025 Avishai - All rights reserved
        </div>
      </div>

      <div className="main-container">
        {/* Editor Panel */}
        <div className="editor-panel">
          <div className="panel-header">
            <Palette size={20} />
            <h2>עורך</h2>
          </div>

          {/* User Management */}
          <div className="user-section">
            <div className="user-info">
              {userData ? (
                <>
                  <img 
                    src={userData.profileImage} 
                    alt="Profile" 
                    className="user-avatar"
                    onError={(e) => {
                      e.currentTarget.src = 'https://static.fcdn.co.il/dyn/projects/privatemessage/icons/usericonprofile.svg';
                    }}
                  />
                  <span className="username">{userData.username}</span>
                  <button onClick={handleUserLogout} className="logout-btn">
                    <LogOut size={16} />
                    התנתק
                  </button>
                </>
              ) : (
                <button onClick={handleUserLogin} className="login-btn">
                  <LogIn size={16} />
                  התחבר למשתמש
                </button>
                          )}
          </div>

        </div>




          {/* Login Popup */}
          {showLoginPopup && (
            <div className="login-popup-overlay" onClick={() => setShowLoginPopup(false)}>
              <div className="login-popup" onClick={(e) => e.stopPropagation()}>
                <div className="login-popup-header">
                  <h3>התחבר למשתמש FXP</h3>
                  <button 
                    className="close-btn" 
                    onClick={() => setShowLoginPopup(false)}
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleLoginSubmit} className="login-form">
                  <div className="input-group">
                    <label htmlFor="username">שם משתמש:</label>
                    <input
                      id="username"
                      type="text"
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value)}
                      placeholder="הקלד את שם המשתמש שלך..."
                      required
                      autoFocus
                    />
                  </div>
                  <div className="login-actions">
                    <button 
                      type="submit" 
                      className="submit-btn"
                      disabled={isLoading}
                    >
                      {isLoading ? 'מתחבר...' : 'התחבר'}
                    </button>
                    <button 
                      type="button" 
                      className="cancel-btn"
                      onClick={() => setShowLoginPopup(false)}
                    >
                      ביטול
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Text Input */}
          <div className="input-group">
            <label>טקסט התת ניק:</label>
            <textarea
              value={tatNick.text || ''}
              onChange={(e) => {
                const newText = e.target.value;
                
                // Check if this would exceed 250 characters
                if (tatNick.multiColor) {
                  // For multi-color, check the full HTML
                  const testParts = tatNick.textParts.map(part => 
                    part.text === tatNick.text ? newText : part.text
                  );
                  const testHTML = testParts.map(part => 
                    `<font color="${tatNick.color}">${part}</font>`
                  ).join('');
                  
                  if (testHTML.length > 250) {
                    showToast('הטקסט חורג מ-250 תווים. אנא קצר אותו.', 'error');
                    return;
                  }
                } else {
                  // For single color, check simple span
                  const testHTML = `<span style="color: ${tatNick.color}">${newText}</span>`;
                  if (testHTML.length > 250) {
                    showToast('הטקסט חורג מ-250 תווים. אנא קצר אותו.', 'error');
                    return;
                  }
                }
                
                setTatNick(prev => ({ ...prev, text: newText }));
              }}
              placeholder="הקלד את התת ניק שלך כאן... (ברירת מחדל: משתמש FXP)"
              className="text-input"
            />
            <div className="char-counter">
              {currentLength}/{MAX_CHARACTERS} תווים
            </div>
          </div>

          {/* User Rank Selection */}
          <div className="controls-section">
            <h3>דרגת משתמש</h3>
            <div className="control-row">
              <label>בחר דרגה:</label>
              <select
                value={selectedUserRank}
                onChange={(e) => setSelectedUserRank(e.target.value as keyof typeof USER_RANKS)}
              >
                {Object.entries(USER_RANKS).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
            
            {/* Reset to Original Rank Button */}
            {userData && selectedUserRank !== originalUserRank && (
              <div className="control-row">
                <button 
                  onClick={resetToOriginalRank}
                  className="reset-rank-btn"
                  title={`חזור לדרגה המקורית: ${USER_RANKS[originalUserRank]}`}
                >
                  חזור לדרגה המקורית
                </button>
              </div>
            )}
          </div>

                    {/* Font Selection */}
          <div className="controls-section">
            <h3>פונט</h3>
            <div className="control-row">
              <label>בחר פונט:</label>
              <select
                value={tatNick.fontFamily}
                onChange={(e) => setTatNick(prev => ({ ...prev, fontFamily: e.target.value }))}
              >
                <option value="inherit">ברירת מחדל</option>
                <option value="Arial, sans-serif">Arial</option>
                <option value="Arial Narrow, sans-serif">Arial Narrow</option>
                <option value="Century Gothic, sans-serif">Century Gothic</option>
                <option value="Courier New, monospace">Courier New</option>
                <option value="Franklin Gothic Medium, sans-serif">Franklin Gothic Medium</option>
                <option value="Georgia, serif">Georgia</option>
                <option value="Lucida Console, monospace">Lucida Console</option>
                <option value="Microsoft Sans Serif, sans-serif">Microsoft Sans Serif</option>
                <option value="System, sans-serif">System</option>
                <option value="Times New Roman, serif">Times New Roman</option>
                <option value="Verdana, sans-serif">Verdana</option>
                <option value="almoni-dl, sans-serif">almoni-dl</option>
                <option value="Arial Black, sans-serif">Arial Black</option>
                <option value="Book Antiqua, serif">Book Antiqua</option>
                <option value="Comic Sans MS, cursive">Comic Sans MS</option>
                <option value="Fixedsys, monospace">Fixedsys</option>
                <option value="Garamond, serif">Garamond</option>
                <option value="Impact, sans-serif">Impact</option>
                <option value="Lucida Sans Unicode, sans-serif">Lucida Sans Unicode</option>
                <option value="Palatino Linotype, serif">Palatino Linotype</option>
                <option value="Tahoma, sans-serif">Tahoma</option>
                <option value="Trebuchet MS, sans-serif">Trebuchet MS</option>
                <option value="rancho, cursive">rancho</option>
                <option value="Open Sans Hebrew, sans-serif">Open Sans Hebrew</option>
                <option value="Heebo, sans-serif">Heebo</option>
              </select>
            </div>
          </div>


          {/* Color Controls */}
          <div className="controls-section">
            <h3>צבעים</h3>
            <div className="control-row">
              <label>צבע טקסט:</label>
              <input
                type="color"
                value={tatNick.color}
                onChange={(e) => {
                  const newColor = e.target.value;
                  
                  // Check if this would exceed 250 characters
                  if (tatNick.multiColor) {
                    const testHTML = tatNick.textParts.map(part => 
                      `<font color="${part.text === tatNick.text ? newColor : part.color}">${part.text}</font>`
                    ).join('');
                    
                    if (testHTML.length > 250) {
                      showToast('שינוי הצבע יחרג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                      return;
                    }
                  }
                  
                  setTatNick(prev => ({ ...prev, color: newColor }));
                }}
              />
              <input
                type="text"
                className="text-input-small"
                value={tatNick.color}
                onChange={(e) => {
                  const newColor = e.target.value;
                  
                  // Check if this would exceed 250 characters
                  if (tatNick.multiColor) {
                    const testHTML = tatNick.textParts.map(part => 
                      `<font color="${part.text === tatNick.text ? newColor : part.color}">${part.text}</font>`
                    );
                    
                    if (testHTML.length > 250) {
                      showToast('שינוי הצבע יחרג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                      return;
                    }
                  }
                  
                  setTatNick(prev => ({ ...prev, color: newColor }));
                }}
                placeholder="#000000"
              />
            </div>
            
            {/* Multi-Color Text */}
            <div className="control-row">
              <label>
                <input
                  type="checkbox"
                  checked={tatNick.multiColor}
                  onChange={toggleMultiColor}
                />
                תת ניק עם 2 צבעים
              </label>
            </div>
            
            {tatNick.multiColor && (
              <div className="multi-color-controls">
                <div className="control-row">
                  <label>חלקי טקסט (מקסימום 2):</label>
                  {tatNick.textParts.length < 2 && (
                    <button 
                      type="button" 
                      className="add-part-btn"
                      onClick={addTextPart}
                    >
                      הוסף חלק
                    </button>
                  )}
                </div>
                
                {tatNick.textParts.map((part, index) => (
                  <div key={index} className="text-part">
                    <input
                      type="text"
                      className="text-input"
                      value={part.text}
                      onChange={(e) => updateTextPart(index, { text: e.target.value })}
                      placeholder="טקסט..."
                    />
                    <input
                      type="color"
                      value={part.color}
                      onChange={(e) => updateTextPart(index, { color: e.target.value })}
                    />
                    <input
                      type="text"
                      className="text-input-small"
                      value={part.color}
                      onChange={(e) => updateTextPart(index, { color: e.target.value })}
                      placeholder="#000000"
                      />
                    {tatNick.textParts.length > 1 && (
                      <button
                        type="button"
                        className="remove-part-btn"
                        onClick={() => removeTextPart(index)}
                      >
                        מחק
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

                    {/* Background & Border */}
        <div className="controls-section">
          <h3>רקע וסגנונות</h3>
          <div className="control-row">
            <label>
              <input
                type="checkbox"
                checked={tatNick.hasBackground}
                onChange={(e) => setTatNick(prev => ({ ...prev, hasBackground: e.target.checked }))}
              />
              הפעל רקע
            </label>
          </div>
          {tatNick.hasBackground && (
            <>
              <div className="control-row">
                <label>צבע רקע:</label>
                <input
                  type="color"
                  value={tatNick.backgroundColor}
                  onChange={(e) => setTatNick(prev => ({ ...prev, backgroundColor: e.target.value }))}
                />
                <input
                  type="text"
                  className="text-input-small"
                  value={tatNick.backgroundColor}
                  onChange={(e) => setTatNick(prev => ({ ...prev, backgroundColor: e.target.value }))}
                  placeholder="#ffffff"
                />
              </div>
              <div className="control-row">
                <label>
                  <input
                    type="checkbox"
                    checked={tatNick.gradient}
                    onChange={(e) => setTatNick(prev => ({ ...prev, gradient: e.target.checked }))}
                  />
                  גרדיאנט
                </label>
              </div>
              {tatNick.gradient && (
                <div className="gradient-controls">
                  <div className="control-row">
                    <label>צבע 1:</label>
                    <input
                      type="color"
                      value={tatNick.gradientColors[0]}
                      onChange={(e) => setTatNick(prev => ({
                        ...prev,
                        gradientColors: [e.target.value, prev.gradientColors[1]]
                      }))}
                    />
                    <input
                      type="text"
                      className="text-input-small"
                      value={tatNick.gradientColors[0]}
                      onChange={(e) => setTatNick(prev => ({
                        ...prev,
                        gradientColors: [e.target.value, prev.gradientColors[1]]
                      }))}
                      placeholder="#ff5500"
                    />
                  </div>
                  <div className="control-row">
                    <label>צבע 2:</label>
                    <input
                      type="color"
                      value={tatNick.gradientColors[1]}
                      onChange={(e) => setTatNick(prev => ({
                        ...prev,
                        gradientColors: [prev.gradientColors[0], e.target.value]
                      }))}
                    />
                    <input
                      type="text"
                      className="text-input-small"
                      value={tatNick.gradientColors[1]}
                      onChange={(e) => setTatNick(prev => ({
                        ...prev,
                        gradientColors: [prev.gradientColors[0], e.target.value]
                      }))}
                      placeholder="#ffe600"
                    />
                  </div>
                  <div className="control-row">
                    <label>כיוון גרדיאנט:</label>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={tatNick.gradientDirection}
                      onChange={(e) => setTatNick(prev => ({ ...prev, gradientDirection: parseInt(e.target.value) }))}
                    />
                    <input
                      type="number"
                      className="number-input"
                      value={tatNick.gradientDirection}
                      onChange={(e) => setTatNick(prev => ({ ...prev, gradientDirection: parseInt(e.target.value) || 0 }))}
                      min="0"
                      max="360"
                    />
                    <span>{tatNick.gradientDirection}°</span>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Border */}
          <div className="control-row">
            <label>
              <input
                type="checkbox"
                checked={tatNick.borderWidth > 0}
                onChange={(e) => setTatNick(prev => ({ 
                  ...prev, 
                  borderWidth: e.target.checked ? 2 : 0 
                }))}
              />
              מסגרת
            </label>
          </div>
          {tatNick.borderWidth > 0 && (
            <>
              <div className="control-row">
                <label>עובי מסגרת:</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={tatNick.borderWidth}
                  onChange={(e) => setTatNick(prev => ({ ...prev, borderWidth: parseInt(e.target.value) }))}
                />
                <input
                  type="number"
                  className="number-input"
                  value={tatNick.borderWidth}
                  onChange={(e) => setTatNick(prev => ({ ...prev, borderWidth: parseInt(e.target.value) || 0 }))}
                  min="1"
                  max="10"
                />
                <span>px</span>
              </div>
              <div className="control-row">
                <label>סגנון מסגרת:</label>
                <select
                  value={tatNick.borderStyle}
                  onChange={(e) => setTatNick(prev => ({ ...prev, borderStyle: e.target.value as any }))}
                >
                  <option value="solid">רציף</option>
                  <option value="dashed">מקווקו</option>
                  <option value="dotted">מנוקד</option>
                  <option value="double">כפול</option>
                </select>
              </div>
              <div className="control-row">
                <label>צבע מסגרת:</label>
                <input
                  type="color"
                  value={tatNick.borderColor}
                  onChange={(e) => setTatNick(prev => ({ ...prev, borderColor: e.target.value }))}
                />
              </div>
            </>
          )}

          {/* Spacing - Only show when background or border is active */}
          {(tatNick.hasBackground || tatNick.borderWidth > 0) && (
            <>
              <div className="control-row">
                <label>ריפוד:</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={tatNick.padding}
                  onChange={(e) => setTatNick(prev => ({ ...prev, padding: parseInt(e.target.value) }))}
                />
                <input
                  type="number"
                  className="number-input"
                  value={tatNick.padding}
                  onChange={(e) => setTatNick(prev => ({ ...prev, padding: parseInt(e.target.value) || 0 }))}
                  min="0"
                  max="20"
                />
                <span>px</span>
              </div>
              <div className="control-row">
                <label>שוליים:</label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={tatNick.margin}
                  onChange={(e) => setTatNick(prev => ({ ...prev, margin: parseInt(e.target.value) }))}
                />
                <input
                  type="number"
                  className="number-input"
                  value={tatNick.margin}
                  onChange={(e) => setTatNick(prev => ({ ...prev, margin: parseInt(e.target.value) || 0 }))}
                />
                <span>px</span>
              </div>
              <div className="control-row">
                <label>עיגול פינות:</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={tatNick.borderRadius}
                  onChange={(e) => setTatNick(prev => ({ ...prev, borderRadius: parseInt(e.target.value) }))}
                />
                <input
                  type="number"
                  className="number-input"
                  value={tatNick.borderRadius}
                  onChange={(e) => setTatNick(prev => ({ ...prev, borderRadius: parseInt(e.target.value) || 0 }))}
                  min="0"
                  max="20"
                />
                <span>px</span>
              </div>
            </>
          )}

          {/* Shadow */}
          <div className="control-row">
            <label>
              <input
                type="checkbox"
                checked={tatNick.shadowX !== 0 || tatNick.shadowY !== 0 || tatNick.shadowBlur !== 0}
                onChange={(e) => setTatNick(prev => ({ 
                  ...prev, 
                  shadowX: e.target.checked ? 2 : 0,
                  shadowY: e.target.checked ? 2 : 0,
                  shadowBlur: e.target.checked ? 4 : 0
                }))}
              />
              צל טקסט
            </label>
          </div>
          {(tatNick.shadowX !== 0 || tatNick.shadowY !== 0 || tatNick.shadowBlur !== 0) && (
            <>
              <div className="control-row">
                <label>מיקום X:</label>
                <input
                  type="range"
                  min="-10"
                  max="10"
                  value={tatNick.shadowX}
                  onChange={(e) => setTatNick(prev => ({ ...prev, shadowX: parseInt(e.target.value) }))}
                />
                <input
                  type="number"
                  className="number-input"
                  value={tatNick.shadowX}
                  onChange={(e) => setTatNick(prev => ({ ...prev, shadowX: parseInt(e.target.value) || 0 }))}
                  min="-10"
                  max="10"
                />
                <span>px</span>
              </div>
              <div className="control-row">
                <label>מיקום Y:</label>
                <input
                  type="range"
                  min="-10"
                  max="10"
                  value={tatNick.shadowY}
                  onChange={(e) => setTatNick(prev => ({ ...prev, shadowY: parseInt(e.target.value) }))}
                />
                <input
                  type="number"
                  className="number-input"
                  value={tatNick.shadowY}
                  onChange={(e) => setTatNick(prev => ({ ...prev, shadowY: parseInt(e.target.value) || 0 }))}
                />
                <span>px</span>
              </div>
              <div className="control-row">
                <label>טשטוש:</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={tatNick.shadowBlur}
                  onChange={(e) => setTatNick(prev => ({ ...prev, shadowBlur: parseInt(e.target.value) }))}
                />
                <input
                  type="number"
                  className="number-input"
                  value={tatNick.shadowBlur}
                  onChange={(e) => setTatNick(prev => ({ ...prev, shadowBlur: parseInt(e.target.value) || 0 }))}
                  min="0"
                  max="20"
                />
                <span>px</span>
              </div>
              <div className="control-row">
                <label>צבע צל:</label>
                <input
                  type="color"
                  value={tatNick.shadowColor}
                  onChange={(e) => setTatNick(prev => ({ ...prev, shadowColor: e.target.value }))}
                />
              </div>
            </>
          )}
        </div>


          {/* Typography Controls */}
          <div className="controls-section">
            <h3>טיפוגרפיה</h3>
            <div className="control-row">
              <label>גודל גופן:</label>
              <input
                type="range"
                min="5"
                max="20"
                value={tatNick.fontSize}
                onChange={(e) => setTatNick(prev => ({ ...prev, fontSize: parseInt(e.target.value) }))}
              />
              <input
                type="number"
                className="number-input"
                value={tatNick.fontSize}
                onChange={(e) => setTatNick(prev => ({ ...prev, fontSize: parseInt(e.target.value) || 13 }))}
                min="5"
                max="20"
              />
              <span>px</span>
            </div>
            <div className="control-row">
              <label>עובי גופן:</label>
              <select
                value={tatNick.fontWeight}
                onChange={(e) => setTatNick(prev => ({ ...prev, fontWeight: parseInt(e.target.value) }))}
              >
                <option value={300}>דק</option>
                <option value={400}>רגיל</option>
                <option value={500}>בינוני</option>
                <option value={600}>חצי עבה</option>
                <option value={700}>עבה</option>
              </select>
            </div>
            <div className="control-row">
              <label>
                <input
                  type="checkbox"
                  checked={tatNick.fontStyle === 'italic'}
                  onChange={(e) => setTatNick(prev => ({ 
                    ...prev, 
                    fontStyle: e.target.checked ? 'italic' : 'normal' 
                  }))}
                />
                נטוי
              </label>
            </div>
            <div className="control-row">
              <label>קו תחתון:</label>
              <select
                value={tatNick.textDecoration}
                onChange={(e) => setTatNick(prev => ({ 
                  ...prev, 
                  textDecoration: e.target.value as any 
                }))}
              >
                <option value="none">ללא</option>
                <option value="underline">קו תחתון</option>
                <option value="line-through">קו חוצה</option>
              </select>
            </div>
          </div>

          {/* Advanced Text Effects */}
          <div className="controls-section">
            <h3>אפקטים מתקדמים</h3>
            
            {/* Text Blur */}
            <div className="control-row">
              <label>טשטוש טקסט:</label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={tatNick.blur}
                onChange={(e) => {
                  const newBlur = parseFloat(e.target.value);
                  const testHTML = generateHTML().replace(/blur\(\d+\.?\d*px\)/, newBlur > 0 ? `blur(${newBlur}px)` : '');
                  if (testHTML.length > 250) {
                    showToast('הוספת טשטוש תחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, blur: newBlur }));
                }}
              />
              <input
                type="number"
                className="number-input"
                value={tatNick.blur}
                onChange={(e) => {
                  const newBlur = parseFloat(e.target.value) || 0;
                  const testHTML = generateHTML().replace(/blur\(\d+\.?\d*px\)/, newBlur > 0 ? `blur(${newBlur}px)` : '');
                  if (testHTML.length > 250) {
                    showToast('הוספת טשטוש תחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, blur: newBlur }));
                }}
                min="0"
                max="5"
                step="0.1"
              />
              <span>px</span>
            </div>

            {/* Text Glow */}
            <div className="control-row">
              <label>
                <input
                  type="checkbox"
                  checked={tatNick.glow}
                  onChange={(e) => {
                    const newGlow = e.target.checked;
                    // Create a test HTML with glow effect
                    const testHTML = generateHTML();
                    if (testHTML.length > 250) {
                      showToast('הוספת זוהר תחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                      return;
                    }
                    setTatNick(prev => ({ ...prev, glow: newGlow }));
                  }}
                />
                זוהר טקסט
              </label>
            </div>
            {tatNick.glow && (
              <div className="control-row">
                <label>צבע זוהר:</label>
                <input
                  type="color"
                  value={tatNick.glowColor}
                  onChange={(e) => {
                    const newColor = e.target.value;
                    const testHTML = generateHTML().replace(new RegExp(tatNick.glowColor, 'g'), newColor);
                    if (testHTML.length > 250) {
                      showToast('שינוי צבע הזוהר יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                      return;
                    }
                    setTatNick(prev => ({ ...prev, glowColor: newColor }));
                  }}
                />
                <input
                  type="text"
                  className="text-input-small"
                  value={tatNick.glowColor}
                  onChange={(e) => {
                    const newColor = e.target.value;
                    const testHTML = generateHTML().replace(new RegExp(tatNick.glowColor, 'g'), newColor);
                    if (testHTML.length > 250) {
                      showToast('שינוי צבע הזוהר יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                      return;
                    }
                    setTatNick(prev => ({ ...prev, glowColor: newColor }));
                  }}
                  placeholder="#ff6b6b"
                />
              </div>
            )}

            {/* Text Opacity */}
            <div className="control-row">
              <label>שקיפות:</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={tatNick.opacity}
                onChange={(e) => {
                  const newOpacity = parseFloat(e.target.value);
                  const testHTML = generateHTML().replace(/opacity:\s*[\d.]+/, `opacity: ${newOpacity}`);
                  if (testHTML.length > 250) {
                    showToast('שינוי השקיפות יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, opacity: newOpacity }));
                }}
              />
              <input
                type="number"
                className="number-input"
                value={tatNick.opacity}
                onChange={(e) => {
                  const newOpacity = parseFloat(e.target.value) || 0;
                  const testHTML = generateHTML().replace(/opacity:\s*[\d.]+/, `opacity: ${newOpacity}`);
                  if (testHTML.length > 250) {
                    showToast('שינוי השקיפות יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, opacity: newOpacity }));
                }}
                min="0"
                max="1"
                step="0.1"
              />
              <span>{Math.round(tatNick.opacity * 100)}%</span>
            </div>

            {/* Letter Spacing */}
            <div className="control-row">
              <label>מרווח בין אותיות:</label>
              <input
                type="range"
                min="-2"
                max="10"
                step="0.1"
                value={tatNick.letterSpacing}
                onChange={(e) => {
                  const newSpacing = parseFloat(e.target.value);
                  const testHTML = generateHTML().replace(/letter-spacing:\s*-?[\d.]+px/, `letter-spacing: ${newSpacing}px`);
                  if (testHTML.length > 250) {
                    showToast('שינוי מרווח האותיות יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, letterSpacing: newSpacing }));
                }}
              />
              <input
                type="number"
                className="number-input"
                value={tatNick.letterSpacing}
                onChange={(e) => {
                  const newSpacing = parseFloat(e.target.value) || 0;
                  const testHTML = generateHTML().replace(/letter-spacing:\s*-?[\d.]+px/, `letter-spacing: ${newSpacing}px`);
                  if (testHTML.length > 250) {
                    showToast('שינוי מרווח האותיות יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, letterSpacing: newSpacing }));
                }}
                min="-2"
                max="10"
                step="0.1"
              />
              <span>px</span>
            </div>

            {/* Word Spacing */}
            <div className="control-row">
              <label>מרווח בין מילים:</label>
              <input
                type="range"
                min="-5"
                max="20"
                value={tatNick.wordSpacing}
                onChange={(e) => {
                  const newSpacing = parseInt(e.target.value);
                  const testHTML = generateHTML().replace(/word-spacing:\s*-?\d+px/, `word-spacing: ${newSpacing}px`);
                  if (testHTML.length > 250) {
                    showToast('שינוי מרווח המילים יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, wordSpacing: newSpacing }));
                }}
              />
              <input
                type="number"
                className="number-input"
                value={tatNick.wordSpacing}
                onChange={(e) => {
                  const newSpacing = parseInt(e.target.value) || 0;
                  const testHTML = generateHTML().replace(/word-spacing:\s*-?\d+px/, `word-spacing: ${newSpacing}px`);
                  if (testHTML.length > 250) {
                    showToast('שינוי מרווח המילים יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, wordSpacing: newSpacing }));
                }}
                min="-5"
                max="20"
              />
              <span>px</span>
            </div>

            {/* Text Transform */}
            <div className="control-row">
              <label>סגנון אותיות:</label>
              <select
                value={tatNick.transform}
                onChange={(e) => {
                  const newTransform = e.target.value;
                  const testHTML = generateHTML().replace(/text-transform:\s*\w+/, newTransform || '');
                  if (testHTML.length > 250) {
                    showToast('שינוי סגנון האותיות יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, transform: newTransform }));
                }}
              >
                <option value="">רגיל</option>
                <option value="text-transform: uppercase">אותיות גדולות</option>
                <option value="text-transform: lowercase">אותיות קטנות</option>
                <option value="text-transform: capitalize">אות ראשונה גדולה</option>
              </select>
            </div>
          </div>

          {/* Advanced Visual Effects */}
          <div className="controls-section">
            <h3>אפקטים ויזואליים מתקדמים</h3>
            
            {/* Text Gradient */}
            <div className="control-row">
              <label>
                <input
                  type="checkbox"
                  checked={tatNick.textGradient}
                  onChange={(e) => {
                    const newGradient = e.target.checked;
                    const testHTML = generateHTML();
                    if (testHTML.length > 250) {
                      showToast('הוספת גרדיאנט תחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                      return;
                    }
                    setTatNick(prev => ({ ...prev, textGradient: newGradient }));
                  }}
                />
                גרדיאנט טקסט
              </label>
            </div>
            {tatNick.textGradient && (
              <>
                <div className="control-row">
                  <label>צבע ראשון:</label>
                  <input
                    type="color"
                    value={tatNick.textGradientColors[0]}
                    onChange={(e) => {
                      const newColors = [...tatNick.textGradientColors];
                      newColors[0] = e.target.value;
                      setTatNick(prev => ({ ...prev, textGradientColors: newColors }));
                    }}
                  />
                </div>
                <div className="control-row">
                  <label>צבע שני:</label>
                  <input
                    type="color"
                    value={tatNick.textGradientColors[1]}
                    onChange={(e) => {
                      const newColors = [...tatNick.textGradientColors];
                      newColors[1] = e.target.value;
                      setTatNick(prev => ({ ...prev, textGradientColors: newColors }));
                    }}
                  />
                </div>
                <div className="control-row">
                  <label>כיוון גרדיאנט:</label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={tatNick.textGradientDirection}
                    onChange={(e) => setTatNick(prev => ({ ...prev, textGradientDirection: parseInt(e.target.value) }))}
                  />
                  <span>{tatNick.textGradientDirection}°</span>
                </div>
              </>
            )}

            {/* Text Rotation */}
            <div className="control-row">
              <label>סיבוב טקסט:</label>
              <input
                type="range"
                min="-45"
                max="45"
                value={tatNick.textRotation}
                onChange={(e) => {
                  const newRotation = parseInt(e.target.value);
                  const testHTML = generateHTML();
                  if (testHTML.length > 250) {
                    showToast('שינוי הסיבוב יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, textRotation: newRotation }));
                }}
              />
              <span>{tatNick.textRotation}°</span>
            </div>

            {/* Text Skew */}
            <div className="control-row">
              <label>הטיה אופקית:</label>
              <input
                type="range"
                min="-30"
                max="30"
                value={tatNick.textSkewX}
                onChange={(e) => {
                  const newSkew = parseInt(e.target.value);
                  const testHTML = generateHTML();
                  if (testHTML.length > 250) {
                    showToast('שינוי ההטיה יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, textSkewX: newSkew }));
                }}
              />
              <span>{tatNick.textSkewX}°</span>
            </div>

            <div className="control-row">
              <label>הטיה אנכית:</label>
              <input
                type="range"
                min="-30"
                max="30"
                value={tatNick.textSkewY}
                onChange={(e) => {
                  const newSkew = parseInt(e.target.value);
                  const testHTML = generateHTML();
                  if (testHTML.length > 250) {
                    showToast('שינוי ההטיה יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, textSkewY: newSkew }));
                }}
              />
              <span>{tatNick.textSkewY}°</span>
            </div>

            {/* Double Shadow */}
            <div className="control-row">
              <label>
                <input
                  type="checkbox"
                  checked={tatNick.doubleShadow}
                  onChange={(e) => {
                    const newDoubleShadow = e.target.checked;
                    const testHTML = generateHTML();
                    if (testHTML.length > 250) {
                      showToast('הוספת צל כפול תחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                      return;
                    }
                    setTatNick(prev => ({ ...prev, doubleShadow: newDoubleShadow }));
                  }}
                />
                צל כפול
              </label>
            </div>
            {tatNick.doubleShadow && (
              <>
                <div className="control-row">
                  <label>צבע צל:</label>
                  <input
                    type="color"
                    value={tatNick.doubleShadowColor}
                    onChange={(e) => setTatNick(prev => ({ ...prev, doubleShadowColor: e.target.value }))}
                  />
                </div>
                <div className="control-row">
                  <label>היסט X:</label>
                  <input
                    type="range"
                    min="-10"
                    max="10"
                    value={tatNick.doubleShadowX}
                    onChange={(e) => setTatNick(prev => ({ ...prev, doubleShadowX: parseInt(e.target.value) }))}
                  />
                  <span>{tatNick.doubleShadowX}px</span>
                </div>
                <div className="control-row">
                  <label>היסט Y:</label>
                  <input
                    type="range"
                    min="-10"
                    max="10"
                    value={tatNick.doubleShadowY}
                    onChange={(e) => setTatNick(prev => ({ ...prev, doubleShadowY: parseInt(e.target.value) }))}
                  />
                  <span>{tatNick.doubleShadowY}px</span>
                </div>
                <div className="control-row">
                  <label>טשטוש:</label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={tatNick.doubleShadowBlur}
                    onChange={(e) => setTatNick(prev => ({ ...prev, doubleShadowBlur: parseInt(e.target.value) }))}
                  />
                  <span>{tatNick.doubleShadowBlur}px</span>
                </div>
              </>
            )}
          </div>

          {/* Text Outline & Stroke */}
          <div className="controls-section">
            <h3>מתאר וקו חיצוני</h3>
            
            {/* Text Stroke */}
            <div className="control-row">
              <label>
                <input
                  type="checkbox"
                  checked={tatNick.textStroke}
                  onChange={(e) => {
                    const newStroke = e.target.checked;
                    const testHTML = generateHTML(); // Test with current settings
                    if (testHTML.length > 250) {
                      showToast('הוספת קו חיצוני תחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                      return;
                    }
                    setTatNick(prev => ({ ...prev, textStroke: newStroke }));
                  }}
                />
                קו חיצוני לטקסט
              </label>
            </div>
            {tatNick.textStroke && (
              <>
                <div className="control-row">
                  <label>עובי קו:</label>
                  <input
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.5"
                    value={tatNick.textStrokeWidth}
                    onChange={(e) => {
                      const newWidth = parseFloat(e.target.value);
                      const testHTML = generateHTML(); // Test with current settings
                      if (testHTML.length > 250) {
                        showToast('שינוי עובי הקו יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                        return;
                      }
                      setTatNick(prev => ({ ...prev, textStrokeWidth: newWidth }));
                    }}
                  />
                  <input
                    type="number"
                    className="number-input"
                    value={tatNick.textStrokeWidth}
                    onChange={(e) => {
                      const newWidth = parseFloat(e.target.value) || 1;
                      const testHTML = generateHTML(); // Test with current settings
                      if (testHTML.length > 250) {
                        showToast('שינוי עובי הקו יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                        return;
                      }
                      setTatNick(prev => ({ ...prev, textStrokeWidth: newWidth }));
                    }}
                    min="0.5"
                    max="3"
                    step="0.5"
                  />
                  <span>px</span>
                </div>
                <div className="control-row">
                  <label>צבע קו:</label>
                  <input
                    type="color"
                    value={tatNick.textStrokeColor}
                    onChange={(e) => {
                      const newColor = e.target.value;
                      const testHTML = generateHTML().replace(new RegExp(tatNick.textStrokeColor, 'g'), newColor);
                      if (testHTML.length > 250) {
                        showToast('שינוי צבע הקו יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                        return;
                      }
                      setTatNick(prev => ({ ...prev, textStrokeColor: newColor }));
                    }}
                  />
                  <input
                    type="text"
                    className="text-input-small"
                    value={tatNick.textStrokeColor}
                    onChange={(e) => {
                      const newColor = e.target.value;
                      const testHTML = generateHTML().replace(new RegExp(tatNick.textStrokeColor, 'g'), newColor);
                      if (testHTML.length > 250) {
                        showToast('שינוי צבע הקו יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                        return;
                      }
                      setTatNick(prev => ({ ...prev, textStrokeColor: newColor }));
                    }}
                    placeholder="#000000"
                  />
                </div>
              </>
            )}
          </div>

          {/* Advanced Filters */}
          <div className="controls-section">
            <h3>פילטרים מתקדמים</h3>
            
            {/* Brightness */}
            <div className="control-row">
              <label>בהירות:</label>
              <input
                type="range"
                min="0"
                max="200"
                value={tatNick.brightness}
                onChange={(e) => {
                  const newBrightness = parseInt(e.target.value);
                  const testHTML = generateHTML().replace(/brightness\(\d+%\)/, `brightness(${newBrightness}%)`);
                  if (testHTML.length > 250) {
                    showToast('שינוי הבהירות יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, brightness: newBrightness }));
                }}
              />
              <span>{tatNick.brightness}%</span>
            </div>

            {/* Contrast */}
            <div className="control-row">
              <label>ניגודיות:</label>
              <input
                type="range"
                min="0"
                max="200"
                value={tatNick.contrast}
                onChange={(e) => {
                  const newContrast = parseInt(e.target.value);
                  const testHTML = generateHTML().replace(/contrast\(\d+%\)/, `contrast(${newContrast}%)`);
                  if (testHTML.length > 250) {
                    showToast('שינוי הניגודיות יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, contrast: newContrast }));
                }}
              />
              <span>{tatNick.contrast}%</span>
            </div>

            {/* Saturate */}
            <div className="control-row">
              <label>רוויה:</label>
              <input
                type="range"
                min="0"
                max="200"
                value={tatNick.saturate}
                onChange={(e) => {
                  const newSaturate = parseInt(e.target.value);
                  const testHTML = generateHTML().replace(/saturate\(\d+%\)/, `saturate(${newSaturate}%)`);
                  if (testHTML.length > 250) {
                    showToast('שינוי הרוויה יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, saturate: newSaturate }));
                }}
              />
              <span>{tatNick.saturate}%</span>
            </div>

            {/* Hue Rotate */}
            <div className="control-row">
              <label>סיבוב גוון:</label>
              <input
                type="range"
                min="0"
                max="360"
                value={tatNick.hueRotate}
                onChange={(e) => {
                  const newHue = parseInt(e.target.value);
                  const testHTML = generateHTML().replace(/hue-rotate\(\d+deg\)/, `hue-rotate(${newHue}deg)`);
                  if (testHTML.length > 250) {
                    showToast('שינוי הגוון יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, hueRotate: newHue }));
                }}
              />
              <span>{tatNick.hueRotate}°</span>
            </div>

            {/* Invert */}
            <div className="control-row">
              <label>היפוך צבעים:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={tatNick.invert}
                onChange={(e) => {
                  const newInvert = parseInt(e.target.value);
                  const testHTML = generateHTML().replace(/invert\(\d+%\)/, `invert(${newInvert}%)`);
                  if (testHTML.length > 250) {
                    showToast('שינוי ההיפוך יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, invert: newInvert }));
                }}
              />
              <span>{tatNick.invert}%</span>
            </div>

            {/* Sepia */}
            <div className="control-row">
              <label>אפקט ספיה:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={tatNick.sepia}
                onChange={(e) => {
                  const newSepia = parseInt(e.target.value);
                  const testHTML = generateHTML().replace(/sepia\(\d+%\)/, `sepia(${newSepia}%)`);
                  if (testHTML.length > 250) {
                    showToast('שינוי הספיה יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, sepia: newSepia }));
                }}
              />
              <span>{tatNick.sepia}%</span>
            </div>
          </div>

          {/* Typography Layout */}
          <div className="controls-section">
            <h3>פריסה וטיפוגרפיה</h3>
            
            {/* Text Indent */}
            <div className="control-row">
              <label>הזחת שורה ראשונה:</label>
              <input
                type="range"
                min="0"
                max="50"
                value={tatNick.textIndent}
                onChange={(e) => {
                  const newIndent = parseInt(e.target.value);
                  const testHTML = generateHTML().replace(/text-indent:\s*\d+px/, `text-indent: ${newIndent}px`);
                  if (testHTML.length > 250) {
                    showToast('שינוי ההזחה יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, textIndent: newIndent }));
                }}
              />
              <span>{tatNick.textIndent}px</span>
            </div>

            {/* White Space */}
            <div className="control-row">
              <label>טיפול ברווחים:</label>
              <select
                value={tatNick.whiteSpace}
                onChange={(e) => {
                  const newWhiteSpace = e.target.value as any;
                  const testHTML = generateHTML().replace(/white-space:\s*\w+/, `white-space: ${newWhiteSpace}`);
                  if (testHTML.length > 250) {
                    showToast('שינוי הרווחים יחרוג מ-250 תווים. אנא קצר את הטקסט תחילה.', 'error');
                    return;
                  }
                  setTatNick(prev => ({ ...prev, whiteSpace: newWhiteSpace }));
                }}
              >
                <option value="normal">רגיל</option>
                <option value="nowrap">ללא שבירת שורה</option>
                <option value="pre">שמירת רווחים</option>
                <option value="pre-wrap">שמירת רווחים + שבירה</option>
                <option value="pre-line">שמירת שורות</option>
              </select>
            </div>
          </div>


          {/* Effects Controls */}

          {/* Special Effects */}
          <div className="controls-section">
            <h3>אפקטים מיוחדים</h3>
            <div className="control-row">
              <label>
                <input
                  type="radio"
                  name="specialEffect"
                  checked={tatNick.specialEffect === 'none'}
                  onChange={() => setTatNick(prev => ({ ...prev, specialEffect: 'none' }))}
                />
                ללא אפקט
              </label>
            </div>
            <div className="control-row">
              <label>
                <input
                  type="radio"
                  name="specialEffect"
                  checked={tatNick.specialEffect === 'guystyle'}
                  onChange={() => setTatNick(prev => ({ ...prev, specialEffect: 'guystyle' }))}
                />
                גיא סטייל
              </label>
            </div>
            <div className="control-row">
              <label>
                <input
                  type="radio"
                  name="specialEffect"
                  checked={tatNick.specialEffect === 'abir'}
                  onChange={() => setTatNick(prev => ({ ...prev, specialEffect: 'abir' }))}
                />
                אביר (מחליף צבעים)
              </label>
            </div>
          </div>



          {/* Reset Button */}
          <div className="controls-section">
            <button onClick={resetToDefault} className="reset-btn">
              לאפס הגדרות לברירת המחדל
            </button>
          </div>

          {/* Import Section */}
          <div className="controls-section">
            <h3>ייבוא קוד קיים</h3>
            <textarea
              value={importCode}
              onChange={(e) => setImportCode(e.target.value)}
              placeholder="הדבק כאן קוד HTML קיים..."
              className="import-input"
            />
            <button onClick={importFromCode} className="import-btn">
              ייבא קוד
            </button>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="preview-panel">
          <div className="panel-header">
            <Eye size={20} />
            <h2>תצוגה מקדימה</h2>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="toggle-btn"
            >
              {showPreview ? 'הסתר' : 'הצג'}
            </button>
          </div>

          {showPreview && (
            <>
              {/* FXP Profile Preview */}
              <div className="preview-section">
                <h3>בפרופיל משתמש</h3>
                <div className="fxp-profile-preview">
                  <iframe
                    srcDoc={generateFXPProfilePreview()}
                    title="FXP Profile Preview"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      backgroundColor: '#fff'
                    }}
                    sandbox="allow-same-origin"
                    scrolling="no"
                  />
                </div>
              </div>

              {/* FXP Comment Preview */}
              <div className="preview-section">
                <h3>בתגובה בפורום</h3>
                <div className="fxp-comment-preview" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
                  <iframe
                    srcDoc={generateFXPCommentPreview()}
                    title="FXP Comment Preview"
                    style={{
                      width: '1200px',
                      height: '400px',
                      border: 'none',
                      backgroundColor: '#fff',
                      transform: 'scale(calc(min(100vw, 1200px) / 1200px))',
                      transformOrigin: 'top left',
                      maxWidth: 'none'
                    }}
                    sandbox="allow-same-origin"
                    scrolling="auto"
                  />
                </div>
              </div>

              {/* HTML Output */}
              <div className="preview-section">
                <h3>קוד HTML</h3>
                <div className="html-output">
                  <code>{generateHTML()}</code>
                  <button onClick={copyToClipboard} className="copy-btn">
                    <Copy size={16} />
                    {copied ? 'הועתק!' : 'העתק'}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Toast Notifications */}
      {toast.show && (
        <div className={`toast toast-${toast.type}`}>
          <div className="toast-icon">
            {toast.type === 'success' && <CheckCircle size={20} />}
            {toast.type === 'error' && <AlertCircle size={20} />}
            {toast.type === 'info' && <Info size={20} />}
          </div>
          <div className="toast-message">{toast.message}</div>
          <button 
            className="toast-close" 
            onClick={() => setToast({ show: false, message: '', type: 'info' })}
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* CSS animations are defined in App.css */}
    </div>
  );
};

export default App;
