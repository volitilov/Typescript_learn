enum Membership {
  Simple,
  Standart,
  Premium
}

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const membership = Membership.Standart      // => 1
const membershipReverse = Membership[2]     // => Premium
const insta = SocialMedia.INSTAGRAM         // => INSTAGRAM
