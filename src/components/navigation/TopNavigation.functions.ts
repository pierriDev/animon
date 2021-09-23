export default function getContainerHeight(statusBarHeight: number) {
  if (statusBarHeight === 48) {
    // iPhone 11
    return 112;
  }

  if (statusBarHeight === 47) {
    // iPhone12 / 12 Pro / 12 Pro max
    return 111;
  }

  if (statusBarHeight === 44) {
    // Rest of the iPhones
    return 88;
  }

  if (statusBarHeight > 42) {
    return 104;
  }

  return 88;
}
