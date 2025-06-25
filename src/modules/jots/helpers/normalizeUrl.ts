export function normalizeUrl(input: string) {
  // Trim and remove leading/trailing spaces
  let url = input.trim();

  // If it already starts with a protocol, return as-is
  if (/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(url)) {
    return url;
  }

  // Add protocol if it's missing
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  try {
    // If it's valid, return the normalized URL
    const urlObj = new URL(url);
    return urlObj.href;
  } catch {
    // Try to guess a domain if it's clearly not valid
    if (!url.includes(".") && /^[\w-]+$/.test(url)) {
      return `https://${url}.com`;
    }
    return null;
  }
}
