import {utilService} from '../../../services/util.service.js';
import {storageService} from '../../../services/async-storage.service.js';

const EMAILS_KEY = 'emails'

const gMails = [{
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes Would love',
    title: [`This is your day yaeli, make it legendary. 
    Here's a special surprise from TML by Tomorrowland to celebrate your birthday and to cherish unforgettable memories.
    
     `, `Adobe, the Adobe logo, and the Adobe XD logo are either registered trademarks or trademarks of Adobe Systems Incorporated 
     in the United States and/or other countries. All other trademarks are the property of their respective owners.

     This is a marketing email from Adobe Systems Software Ireland Limited, 4‑6 Riverwalk, Citywest Business Park, Dublin 24, Ireland.
     
     Click here to unsubscribe or send an unsubscribe request to the postal address above. Please review the Adobe Privacy Policy.
     
     To ensure future delivery of email, add mail@email.adobe.com to your address book, contacts, or safe senders list.
     
     Registered office: Adobe Systems Software Ireland Limited, 4‑6 Riverwalk, Citywest Business Park, Dublin 24, Ireland. Registered number: 344992`],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'momo@momo.com',
    sendBy: 'Wizz Air',
    sendByFirst: 'W',
    isStar: true,
    isTrash: false,
    isDrafts: false,
    isSent: false
},
{
    id: 'e102',
    subject: 'Discover all you need',
    body: 'Tomorrowland Headphones & Upcoming Events',
    title: [`Hi there,

    It’s one thing for us to tell you about new features, but it’s so much more special when we can share how these updates 
    have helped people unlock their inner designer and achieve their goals! Here are a few of our favourite tweets from the 
    last few months as people explore what’s new:`, `“I have been playing with the Canva Video Editor today. You NEED to try it to see how awesome it really is. 
    💯 @Canva is truly becoming a one-stop shop for creativity!`, `“Whaaatt!!?? You can now SCREEN RECORD in @canva Just another reason to love it!”`, `Thanks to our community for sharing your #canvalove

    The Canva Team`],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'start@tomorrowland.com',
    sendBy: 'Tomorrowland',
    sendByFirst: 'T',
    isStar: false,
    isTrash: false,
    isDrafts: false,
    isSent: false
},
{
    id: 'e103',
    subject: 'A State Of Trance!',
    body: 'A State Of Trance 1000 Mexico!',
    title: [`Dear ASOT-fan,
    Although we haven't been able to celebrate the 1000th episode of ASOT to the fullest yet, we're more than happy that in a few days' time, we'll 
    be able to reunite with our Mexican trance family! On the 19th of November, we will turn Foro Sol in Mexico City into our dancefloor and celebrate
     with not one, but TWO stages with some of the best trance artists!
    
    `, `Lineup (A-Z): Allen Watts | Alpha 9 | Armin van Buuren (2-hour set) | Blastoyz | Chris Schweizer | Craig Connelly | Farius | Gabriel & Dresden | Gareth Emery | Genix | Key4050 | Leo Reyes | Rodg | Ruben de Ronde | Super8 & Tab | ZAA
    `, `Not able to join us in real life, but don't want to miss out on all the ASOT action? In that case, we have great news for you too! Get your streaming party ready and join us via the live stream on Facebook and YouTube. The live stream will start at 17:50h CST (Mexican local time), so check out our world map below to see what time you need to tune in!

    `],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'newsletter@armadamusic.com',
    sendBy: 'A State Of Trance',
    sendByFirst: 'A',
    isStar: false,
    isTrash: false,
    isDrafts: false,
    isSent: false
},
{
    id: 'e104',
    subject: 'Can I be frank?',
    body: 'The clock is ticking...',
    title: [`The clock is ticking...

    I haven't heard from you yet, so I just wanted to make sure you’ve heard the news.
    
    If you have been on the fence about joining The Motley Fool...today is your day!
    
    Because we're taking up to 78% Off the list price for new members1 of The Motley Fool today in our special Double Down Event!
    
    And even better, thanks to our ironclad guarantee...you can take a full 30 days to "kick the tires"...and still get your entire membership fee back if you're not completely satisfied.
    
    But please don't delay...because like I said earlier the clock is ticking.
    
    And I can't guarantee this offer will be open tomorrow.`,`Since inception in 2002, our flagship service's average stock pick has returned over 683%, which is more than quadruple the return of the market!

    When you become a Motley Fool member, you'll be joining a thriving community of likeminded investors that love this service. And I'm confident you `,],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'fool@foolsubs.com',
    sendBy: 'The Motley Fool',
    sendByFirst: 'T',
    isStar: false,
    isTrash: false,
    isDrafts: false,
    isSent: false
},
{
    id: 'e105',
    subject: 'Get $50 to start investing',
    body: 'Real Rewards by American Eagle',
    title: [`Real Rewards by American Eagle & Aerie members earn points on purchases (after discounts and before taxes and fees) made at American Eagle Outfitters® and Aerie®. Click here for Real Rewards by American Eagle & Aerie terms and conditions. See Real Rewards by American Eagle & Aerie terms and conditions to end your membership in Real Rewards. If you end your membership, you will no longer receive your free benefits, points towards rewards and email updates.
    `, `See the Real Rewards by American Eagle & Aerie Program terms and conditions for details at ae.com/realrewards/terms.

    *Cardholder offers are subject to credit approval and a Real Rewards credit card must be used as the sole payment type. See here for details.
    © 2021 AEO Management Co. All Rights Reserved.
    `],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'ae@e.ae.com',
    sendBy: 'Real Rewards & Aerie',
    sendByFirst: 'R',
    isStar: false,
    isTrash: false,
    isDrafts: false,
    isSent: false
},
{
    id: 'e106',
    subject: 'Re-use your best content',
    body: 'Re-use. Reformat .Really easily.',
    title: [`Re-use. Reformat .Really easily.
    Re-using the valuable information in your PDFs is as easy as saving a file with Acrobat Pro DC.
    `, `Convert PDF files to editable Microsoft Word, Excel, PowerPoint files, even from your mobile phone or tablet. Spend less time reformatting complex documents – and stay productive wherever you are.
    Buy now`,'Would love to catch up sometimes Would love to catch up sometimes ',`Adobe services, like Adobe Creative Cloud, are available only to users 13 and older. Use of Adobe services and applications requires agreement with the applicable Terms of Use and the Adobe Privacy Policy.

    Adobe, Adobe Acrobat and the Adobe logo are either registered trademarks or trademarks of Adobe in the United States and/or other countries. All other trademarks are the property of their respective owners.
    `],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'mail@mail.adobe.com',
    sendBy: 'Adobe Acrobat',
    sendByFirst: 'A',
    isStar: false,
    isTrash: false,
    isDrafts: false,
    isSent: false
},
{
    id: 'e107',
    subject: 'Your Next Scuba Escape...',
    body: 'When Do You Want To Go Diving?',
    title: [`With seasons and marine life in mind, we created an annual diving calendar which highlights the hotspots around the world in each month. Explore these destinations and book your next dream scuba vacation.	
    `, `For snow lovers and those with a thirst for adventure, why not embrace the cold and a dry suit and head for the spectacular land and seascapes of Antarctica!
    `,`Incredible Diving Destinations for Every Month`,`PADI Travel Loewenstrasse 1, 8001 Zürich, Switzerland`],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'travel@padi.com',
    sendBy: 'PADI Travel',
    sendByFirst: 'P',
    isStar: false,
    isTrash: false,
    isDrafts: false,
    isSent: false
},

{
    id: 'e108',
    subject: 'important message!',
    body: 'Time system for the semester b',
    title: [`This is your day yaeli, make it legendary. 
    Here's a special surprise from TML by Tomorrowland to celebrate your birthday and to cherish unforgettable memories.
    
     `, `Adobe, the Adobe logo, and the Adobe XD logo are either registered trademarks or trademarks of Adobe Systems Incorporated 
     in the United States and/or other countries. All other trademarks are the property of their respective owners.

     This is a marketing email from Adobe Systems Software Ireland Limited, 4‑6 Riverwalk, Citywest Business Park, Dublin 24, Ireland.
     
     Click here to unsubscribe or send an unsubscribe request to the postal address above. Please review the Adobe Privacy Policy.
     
     To ensure future delivery of email, add mail@email.adobe.com to your address book, contacts, or safe senders list.
     
     Registered office: Adobe Systems Software Ireland Limited, 4‑6 Riverwalk, Citywest Business Park, Dublin 24, Ireland. Registered number: 344992`],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'theOpen@openu.ac.il',
    sendBy: 'The Open University',
    sendByFirst: 'T',
    isStar: true,
    isTrash: false,
    isDrafts: false,
    isSent: false
},
{
    id: 'e109',
    subject: 'Canva updates',
    body: 'Canva updates, as told by you Advertisement 💯',
    title: [`Hi there,

    It’s one thing for us to tell you about new features, but it’s so much more special when we can share how these updates 
    have helped people unlock their inner designer and achieve their goals! Here are a few of our favourite tweets from the 
    last few months as people explore what’s new:`, `“I have been playing with the Canva Video Editor today. You NEED to try it to see how awesome it really is. 
    💯 @Canva is truly becoming a one-stop shop for creativity!`, `“Whaaatt!!?? You can now SCREEN RECORD in @canva Just another reason to love it!”`, `Thanks to our community for sharing your #canvalove

    The Canva Team`],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'start@canva.com',
    sendBy: 'Canva',
    sendByFirst: 'C',
    isStar: false,
    isTrash: false,
    isDrafts: false,
    isSent: false
},
{
    id: 'e110',
    subject: 'A State Of Trance!',
    body: 'A State Of Trance 1000 Mexico!',
    title: [`Dear ASOT-fan,
    Although we haven't been able to celebrate the 1000th episode of ASOT to the fullest yet, we're more than happy that in a few days' time, we'll 
    be able to reunite with our Mexican trance family! On the 19th of November, we will turn Foro Sol in Mexico City into our dancefloor and celebrate
     with not one, but TWO stages with some of the best trance artists!
    
    `, `Lineup (A-Z): Allen Watts | Alpha 9 | Armin van Buuren (2-hour set) | Blastoyz | Chris Schweizer | Craig Connelly | Farius | Gabriel & Dresden | Gareth Emery | Genix | Key4050 | Leo Reyes | Rodg | Ruben de Ronde | Super8 & Tab | ZAA
    `, `Not able to join us in real life, but don't want to miss out on all the ASOT action? In that case, we have great news for you too! Get your streaming party ready and join us via the live stream on Facebook and YouTube. The live stream will start at 17:50h CST (Mexican local time), so check out our world map below to see what time you need to tune in!

    `],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'newsletter@armadamusic.com',
    sendBy: 'A State Of Trance',
    sendByFirst: 'A',
    isStar: false,
    isTrash: false,
    isDrafts: false,
    isSent: false
},
{
    id: 'e111',
    subject: 'Can I be frank?',
    body: 'The clock is ticking...',
    title: [`The clock is ticking...

    I haven't heard from you yet, so I just wanted to make sure you’ve heard the news.
    
    If you have been on the fence about joining The Motley Fool...today is your day!
    
    Because we're taking up to 78% Off the list price for new members1 of The Motley Fool today in our special Double Down Event!
    
    And even better, thanks to our ironclad guarantee...you can take a full 30 days to "kick the tires"...and still get your entire membership fee back if you're not completely satisfied.
    
    But please don't delay...because like I said earlier the clock is ticking.
    
    And I can't guarantee this offer will be open tomorrow.`,`Since inception in 2002, our flagship service's average stock pick has returned over 683%, which is more than quadruple the return of the market!

    When you become a Motley Fool member, you'll be joining a thriving community of likeminded investors that love this service. And I'm confident you `,],
    isRead: false,
    sentAt: new Date().toDateString().slice(4, 10),
    to: 'fool@foolsubs.com',
    sendBy: 'The Motley Fool',
    sendByFirst: 'T',
    isStar: false,
    isTrash: false,
    isDrafts: false,
    isSent: false
},
]

_createMails()

export const emailService = {
    query,
    save,
    remove,
    getById,
    getEmptyMail
};

function _createMails() {
    let mails = utilService.loadFromStorage(EMAILS_KEY);
    if (!mails || !mails.length) {
        mails = gMails
        utilService.saveToStorage(EMAILS_KEY, mails);
    }
}

function query() {
    return storageService.query(EMAILS_KEY);
}

function save(mail,append = true) {
    if (mail.id) return storageService.put(EMAILS_KEY, mail);
    else return storageService.post(EMAILS_KEY, mail, append);
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}

function getById(emailId) {
    console.log('emailId',emailId)
    return storageService.get(EMAILS_KEY, emailId)
        .then(email => {
            return email
        })
}


function getEmptyMail() {
    return {
        subject: '',
        body: '',
        title: [''],
        isRead: false,
        sentAt: new Date().toDateString().slice(4, 10),
        to: '',
        sendBy: 'Me',
        sendByFirst: 'M',
        isStar: false,
        isTrash: false,
        isDrafts: false,
        isSent: false,
        isDrafts: true
    }
}