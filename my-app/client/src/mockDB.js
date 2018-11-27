class Recognition {
  constructor(avatarSender, avatarReceiver, sender, receiver, beesToGive, date, message) {
    this.avatarSender = avatarSender;
    this.avatarReceiver = avatarReceiver;
    this.sender = sender;
    this.receiver = receiver;
    this.beesToGive = beesToGive;
    this.date = date;
    this.message = message;

  }

  static sortDBByDate(recognition) {
    var recognition = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25];
    recognition.sort(function (a, b) {
      // return new Date(b.date) - new Date(a.date);
      let diff = new Date(a.date) - new Date(b.date);
      a.date = new Date(a.date).toDateString();
      b.date = new Date(b.date).toDateString();
      return diff; //store in reverse order - for efficieny purposes

    });
    return recognition;
  };
};

const r1 = new Recognition("avatars/kyle.brothis.png", "avatars/ashley.elder.png", "kyle.brothis", "ashley.elder", 2, "10/2/2018", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
const r2 = new Recognition("avatars/ashley.elder.png", "avatars/MerryD.png", "ashley.elder", "MerryD", 2, "06/11/2018", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
const r3 = new Recognition("avatars/BrettGoers.png", "avatars/MerryD.png", "Brett Goers", "MerryD", 3, "09/30/2017", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?")
const r4 = new Recognition("avatars/JasonDang.png", "avatars/MerryD.png", "Jason Dang", "MerryD", 5, "01/1/2016", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.")
const r5 = new Recognition("avatars/kyle.brothis.png", "avatars/erikhoy.png", "kyle.brothis", "erikhoy", 5, "12/25/2016", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
const r6 = new Recognition("avatars/erikhoy.png", "avatars/MerryD.png", "erikhoy", "MerryD", 4, "01/12/2017", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et. Vulputate enim nulla aliquet porttitor lacus. Lacus viverra vitae congue eu consequat. Ut venenatis tellus in metus. Libero id faucibus nisl tincidunt eget nullam non. Et tortor consequat id porta. Est velit egestas dui id ornare arcu odio ut sem. Massa sed elementum tempus egestas sed sed. Ac placerat vestibulum lectus mauris ultrices eros.")
const r7 = new Recognition("avatars/JasonDang.png", "avatars/ashley.elder.png", "Jason Dang", "ashleyelder", 2, "03/12/2016", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
const r8 = new Recognition("avatars/Egor.png", "avatars/erikhoy.png", "Egor Y", "erikhoy", 2, "04/03/2018", "Great jobs on those TPS reports.")
const r9 = new Recognition("avatars/Egor.png", "avatars/BrettGoers.png", "Egor Y", "Brett Goers", 4, "05/06/2018", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie ac feugiat sed. Nam aliquam sem et tortor consequat.")
const r10 = new Recognition("avatars/ashley.elder.png", "avatars/BrettGoers.png", "ashley.elder", "Brett Goers", 2, "11/22/2016", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci ac auctor augue. Elit at imperdiet dui accumsan.")
const r11 = new Recognition("avatars/ashley.elder.png", "avatars/ShambreSW.png", "ashley.elder", "Shambre SW", 3, "12/24/2017", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris. Sapien faucibus et molestie ac feugiat sed lectus.")
const r12 = new Recognition("avatars/kyle.brothis.png", "avatars/ShambreSW.png", "kyle.brothis", "Shambre SW", 3, "12/23/2017", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Amet massa vitae tortor condimentum lacinia quis. Maecenas accumsan lacus vel facilisis.")
const r13 = new Recognition("avatars/erikhoy.png", "avatars/kyle.brothis.png", "erikhoy", "kyle.brothis", 3, "11/22/2016", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nec ullamcorper sit amet risus nullam eget felis. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Vitae elementum curabitur vitae nunc sed velit. Sit amet luctus venenatis lectus magna fringilla urna porttitor.")
const r14 = new Recognition("avatars/erikhoy.png", "avatars/MerryD.png", "erikhoy", "MerryD", 1, "12/23/2017", "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.")
const r15 = new Recognition("avatars/Egor.png", "avatars/JasonDang.png", "Egor", "Jason Dang", 2, "10/31/2017", "I’m slowly becoming a convert to the principle that you can’t motivate people to do things, you can only de-motivate them. The primary job of the manager is not to empower but to remove obstacles.")
const r16 = new Recognition("avatars/kyle.brothis.png", "avatars/ShambreSW.png", "kyle.brothis", "Shambre SW", 1, "12/23/2017", "Technology will definitely solve all our problems, but in the process it will create brand new ones. But that’s okay because the most you can expect from life is to get to solve better and better problems.")
const r17 = new Recognition("avatars/ShambreSW.png", "avatars/kyle.brothis.png", "Shambre SW", "kyle.brothis", 3, "04/15/2018", "Life is half delicious yogurt, half crap, and your job is to keep the plastic spoon in the yogurt.")
const r18 = new Recognition("avatars/erikhoy.png", "avatars/ashley.elder.png", "erikhoy", "ashley.elder", 3, "05/02/2016", "Most success springs from an obstacle or failure. I became a cartoonist largely because I failed in my goal of becoming a successful executive.")
const r19 = new Recognition("avatars/erikhoy.png", "avatars/ShambreSW.png", "erikhoy", "Shambre SW", 5, "05/09/2018", "If you spend all your time arguing with people who are nuts, you’ll be exhausted and the nuts will still be nuts.")
const r20 = new Recognition("avatars/kyle.brothis.png", "avatars/erikhoy.png", "kyle.brothis", "erikhoy", 3, "04/02/2017", "You don’t have to be a ‘person of influence’ to be influential. In fact, the most influential people in my life are probably not even aware of the things they’ve taught me.")
const r21 = new Recognition("avatars/Egor.png", "avatars/BrettGoers.png", "Egor", "Brett Goers", 2, "03/03/2018", "The best plan now is to have as many bosses as possible. I call it boss diversity. If you work for a company and you have one boss and that boss doesn’t like you or wants to get rid of you, you’re in trouble. But if you work for yourself, you have lots of bosses, who are your customers, and if a few of them decide they don’t like you, that’s okay.")
const r22 = new Recognition("avatars/MerryD.png", "avatars/ashley.elder.png", "MerryD", "ashley.elder", 3, "10/01/2017", "Remember there’s no such thing as a small act of kindness. Every act creates a ripple with no logical end.")
const r23 = new Recognition("avatars/MerryD.png", "avatars/erikhoy.png", "MerryD", "erikhoy", 2, "10/02/2017", "Oh, and remember: next Friday... is Hawaiian shirt day. So, you know, if you want to, go ahead and wear a Hawaiian shirt and jeans.")
const r24 = new Recognition("avatars/MerryD.png", "avatars/ShambreSW.png", "MerryD", "ShambreSW", 2, "06/28/2018", "Yeah........I'm gonna need you to come in on Saturday.")
const r25 = new Recognition("avatars/MerryD.png", "avatars/Egor.png", "MerryD", "Egor", 4, "10/12/2018", "I believe you have my stapler.")

localStorage.setItem('db', JSON.stringify(Recognition.sortDBByDate()));

export default Recognition;
