// विवरण: जोक्स API
let jokes = [
    {
        "category": "प्रोग्रामिंग",
        "type": "twopart",
        "setup": "बिट्स क्या होते हैं?",
        "delivery": "छोटे-छोटे टुकड़े जो तब बचते हैं जब आप अपना कंप्यूटर सीढ़ियों से गिरा देते हैं।",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 210,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "प्रोग्रामिंग",
        "type": "twopart",
        "setup": "प्रोग्रामिंग में सबसे ज्यादा उपयोग की जाने वाली भाषा कौन सी है?",
        "delivery": "गालियाँ।",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 192,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "प्रोग्रामिंग",
        "type": "twopart",
        "setup": "अरे, एक जोक सुनना चाहोगे?",
        "delivery": "रेगुलर एक्सप्रेशन से HTML पार्स करना।",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 10,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "प्रोग्रामिंग",
        "type": "twopart",
        "setup": "जावा स्क्रिप्ट डेवलपर उदास क्यों था?",
        "delivery": "क्योंकि उसे एक्सप्रेस करना नहीं आता था! (Node और Express पर मज़ाक)",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 291,
        "lang": "hi"
    },
    {
        "category": "प्रोग्रामिंग",
        "type": "single",
        "joke": "अगर बिल गेट्स के पास हर बार विंडोज़ क्रैश होने पर एक सिक्का होता... ओह रुको, उसके पास पहले से ही है!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 22,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "प्रोग्रामिंग",
        "type": "twopart",
        "setup": "इसे 'हाइपर टर्मिनल' क्यों कहते हैं?",
        "delivery": "क्योंकि इसमें बहुत ज्यादा जावा (Java) होती है।",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 225,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "प्रोग्रामिंग",
        "type": "twopart",
        "setup": "Python प्रोग्रामर चश्मा क्यों पहनते हैं?",
        "delivery": "क्योंकि वे 'C' नहीं देख सकते।",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 293,
        "lang": "hi"
    },
    {
        "category": "प्रोग्रामिंग",
        "type": "single",
        "joke": "// यह लाइन कुछ नहीं करती, लेकिन इसे हटाने पर कोड काम करना बंद कर देता है।",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 12,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "प्रोग्रामिंग",
        "type": "twopart",
        "setup": "डेटाबेस एडमिनिस्ट्रेटर ने अपनी पत्नी को क्यों छोड़ा?",
        "delivery": "क्योंकि उसकी बहुत सारी 'one-to-many' रिलेशनशिप थी।",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 264,
        "lang": "hi"
    },
    {
    "category": "Programming",
        "type": "twopart",
        "setup": "एक प्रोग्रामर मंदिर गया और भगवान से बोला...",
        "delivery": "भगवान! कृपया मेरी जिंदगी से सारे bugs हटा दो!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 301,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "कंप्यूटर साइंस स्टूडेंट शादी के मंडप में पहुंचा, पंडित ने पूछा: 'फेरे लोगे?'",
        "delivery": "स्टूडेंट: 'क्यों, while loop में नहीं हो सकते?'",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 302,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "टीचर: 'बच्चों, सबसे तेज़ चलने वाली चीज़ क्या होती है?'",
        "delivery": "प्रोग्रामर: 'WiFi, लेकिन जब उसकी स्पीड स्लो हो तो गुस्सा भी सबसे तेज़ आता है!'",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 303,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "लड़की: 'तुम मुझे इग्नोर क्यों कर रहे हो?'",
        "delivery": "लड़का (प्रोग्रामर): 'सॉरी, मैं try-catch में फंस गया था!'",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 304,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "प्रोग्रामर ने भगवान से पूछा: 'भगवान, मेरी लाइफ क्यों खराब चल रही है?'",
        "delivery": "भगवान: 'क्योंकि तूने अभी तक Debugging नहीं की!'",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 305,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "बॉयफ्रेंड: 'डार्लिंग, मैं तुम्हें अपने लैपटॉप से ज्यादा प्यार करता हूँ!'",
        "delivery": "गर्लफ्रेंड: 'ओह, सच में?' बॉयफ्रेंड: 'हाँ, लेकिन जब बैटरी खत्म होती है तो फिर लैपटॉप ही अच्छा लगता है!'",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 306,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "प्रोग्रामर डॉक्टर के पास गया, बोला: 'डॉक्टर साहब, मेरी याददाश्त कमजोर हो गई है!'",
        "delivery": "डॉक्टर: 'कब से?' प्रोग्रामर: 'कब से क्या?'",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 307,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "टीचर: 'तुम परीक्षा में इतने कम नंबर क्यों लाए?'",
        "delivery": "बच्चा: 'क्योंकि मुझे error handling नहीं आती!'",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 308,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "इंजीनियरिंग स्टूडेंट्स ने मंदिर में भगवान से क्या मांगा?",
        "delivery": "'हे भगवान! बस मेरे कोड में कोई Segmentation Fault न आए!'",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 309,
        "safe": true,
        "lang": "hi"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "प्रोग्रामर ने शादी के कार्ड पर क्या लिखा?",
        "delivery": "'Finally, committed; लेकिन शादी के बाद, Debugging चालू रहेगी!'",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 310,
        "safe": true,
        "lang": "hi"
    }
];

let jokeBtn = document.getElementById('jokeBtn');
let joke = document.getElementById('joke');

jokeBtn.addEventListener('click', function () {
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    if (randomJoke.type === "twopart") {
        joke.innerHTML = randomJoke.setup + '<br>' + randomJoke.delivery;
    } else {
        joke.innerHTML = randomJoke.joke;
    }
    console.log(randomJoke);
    window.scrollTo(0, document.body.scrollHeight);
});
