import React from 'react';
import styles from './service.module.css';
import SocialItem from '../socialItem/SocialItem';
import {Instagram, Facebook, YouTube, Twitter} from '@material-ui/icons';
import {SiTiktok, ImSoundcloud, SiNetflix, AiFillAmazonCircle, FaSpotify} from 'react-icons/all';
import PremiumItem from '../premium/PremiumItem';

const Service = () => {
    let insta = {
        title1: "Instagram premium followers",
        title2: "Instagram likes packages",
        title3: "Instagram video views/IGTV views",
        data1: [
            {
                price: 'Nu.280/-',
                desc: "   500 followers "
            }, {
                price: "Nu.510/-",
                desc: "   1000 followers"
            }, {
                price: "Nu.866/-",
                desc: "    2000 followers"
            }, {
                price: "Nu.1310/-",
                desc: '    3000 followers'
            }, {
                price: " Nu.1790/-",
                desc: '    4000 followers'
            }, {
                price: 'Nu.2270/-',
                desc: '    5000 followers'
            }
        ],
        data2: [
            {
                price: 'Nu.115/-',
                desc: "    500 likes "
            }, {
                price: "Nu.215/-",
                desc: "    1000 likes"
            }, {
                price: "Nu.315/-",
                desc: "    2000 likes"
            }, {
                price: "Nu.415/-",
                desc: '    3000 likes'
            }, {
                price: " Nu.515/-",
                desc: '    4000 likes'
            }, {
                price: 'Nu.615/-',
                desc: '    5000 likes'
            }
        ],
        data3: [
            {
                price: 'Nu.70/-',
                desc: "    1000 views "
            }, {
                price: "Nu.95/-",
                desc: "    2000 views"
            }, {
                price: "Nu.125/-",
                desc: "    3000 views"
            }, {
                price: "Nu.155/-",
                desc: '    4000 views'
            }, {
                price: " Nu.195/-",
                desc: '    5000 views'
            }
        ]
    }
    let tiktok = {
        title1: "Tiktok premium fans",
        title2: "Tiktok hearts",
        title3: "Tiktok real views",
        data1: [
            {
                price: 'Nu.280/-',
                desc: "   500 fans "
            }, {
                price: "Nu.499/-",
                desc: "   1000 fans"
            }, {
                price: "Nu.990/-",
                desc: "    2000 fans"
            }, {
                price: "Nu.1410/-",
                desc: '    3000 fans'
            }, {
                price: " Nu.1790/-",
                desc: '    4000 fans'
            }, {
                price: 'Nu.2190/-',
                desc: '    5000 fans'
            }
        ],
        data2: [
            {
                price: 'Nu.110/-',
                desc: "    500 hearts "
            }, {
                price: "Nu.265/-",
                desc: "    1000 hearts"
            }, {
                price: "Nu.345/-",
                desc: "    2000 hearts"
            }, {
                price: "Nu.495/-",
                desc: '    3000 hearts'
            }, {
                price: " Nu.630/-",
                desc: '    4000 hearts'
            }, {
                price: 'Nu.790/-',
                desc: '    5000 hearts'
            }
        ],
        data3: [
            {
                price: 'Nu.50/-',
                desc: "    1000 views "
            }, {
                price: "Nu.80/-",
                desc: "    5000 views"
            }, {
                price: "Nu.120/-",
                desc: "    10,000 views"
            }, {
                price: "Nu.160/-",
                desc: '    20,000 views'
            }, {
                price: " Nu.200/-",
                desc: '    5000 views'
            }
        ]
    }

    let facebook = {
        title1: "Facebook page Likes",
        title2: "Facebook posts likes",
        title3: "Facebook video views",
        data1: [
            {
                price: 'Nu.400/-',
                desc: "    500 pages likes "
            }, {
                price: "Nu.800/-",
                desc: "    1000 pages likes"
            }, {
                price: "Nu.1200/-",
                desc: "    2000 pages likes"
            }, {
                price: "Nu.1600/-",
                desc: '    3000 pages likes'
            }, {
                price: " Nu.1900/-",
                desc: '    4000 pages likes'
            }, {
                price: 'Nu.2200/-',
                desc: '    5000 pages likes'
            }
        ],
        data2: [
            {
                price: 'Nu.210/-',
                desc: "    500 likes "
            }, {
                price: "Nu.430/-",
                desc: "    1000 likes"
            }, {
                price: "Nu.620/-",
                desc: "    2000 likes"
            }, {
                price: "Nu.880/-",
                desc: '    3000 likes'
            }, {
                price: " Nu.1020/-",
                desc: '    4000 likes'
            }, {
                price: 'Nu.1350/-',
                desc: '    5000 likes'
            }
        ],
        data3: [
            {
                price: 'Nu.80/-',
                desc: "    500 views "
            }, {
                price: "Nu.120/-",
                desc: "    1000 views"
            }, {
                price: "Nu.170/-",
                desc: "    2000 views"
            }, {
                price: "Nu.210/-",
                desc: '    3000 views'
            }, {
                price: " Nu.270/-",
                desc: '    4000 views'
            }, {
                price: " Nu.330/-",
                desc: '    5000 views'
            }
        ]
    }
    let youtube = {
        title1: "YouTube Subscriber Likes",
        title2: "YouTube RAV* Video Views",
        title3: "YouTube video likes",
        data1: [
            {
                price: 'Nu.350/-',
                desc: "    100 subscribers"
            }, {
                price: "Nu.550/-",
                desc: "    200 subscribers"
            }, {
                price: "Nu.650/-",
                desc: "    300 subscribers"
            }, {
                price: "Nu.800/-",
                desc: '    400 subscribers'
            }, {
                price: " Nu.970/-",
                desc: '    500 subscribers'
            }, {
                price: 'Nu.2100/-',
                desc: '    1000 subscribers'
            }
        ],
        data3: [
            {
                price: 'Nu.199/-',
                desc: "    500 likes "
            }, {
                price: "Nu.299/-",
                desc: "    1000 likes"
            }, {
                price: "Nu.399/-",
                desc: "    2000 likes"
            }, {
                price: "Nu.5099/-",
                desc: '    3000 likes'
            }, {
                price: " Nu.799/-",
                desc: '    4000 likes'
            }, {
                price: 'Nu.1199/-',
                desc: '    5000 likes'
            }
        ],
        data2: [
            {
                price: 'Nu.150/-',
                desc: "    500 views "
            }, {
                price: "Nu.320/-",
                desc: "    1000 views"
            }, {
                price: "Nu.670/-",
                desc: "    2000 views"
            }, {
                price: "Nu.750/-",
                desc: '    3000 views'
            }, {
                price: " Nu.999/-",
                desc: '    4000 views'
            }, {
                price: " Nu.1390/-",
                desc: '    5000 views'
            }
        ]
    }
    let twitter = {
        title1: "Twitter followers",
        title2: "Twitter likes",
        title3: "Twitter video views",
        data1: [
            {
                price: 'Nu.380/-',
                desc: "    500 followers"
            }, {
                price: "Nu.790/-",
                desc: "    1000 followers"
            }, {
                price: "Nu.1100/-",
                desc: "    2000 followers"
            }, {
                price: "Nu.1790/-",
                desc: '    3000 followers'
            }, {
                price: " Nu.2450/-",
                desc: '    4000 followers'
            }, {
                price: 'Nu.2999/-',
                desc: '    5000 followers'
            }
        ],
        data2: [
            {
                price: 'Nu.310/-',
                desc: "    500 likes "
            }, {
                price: "Nu.620/-",
                desc: "    1000 likes"
            }, {
                price: "Nu.999/-",
                desc: "    2000 likes"
            }
        ],
        data3: [
            {
                price: 'Nu.90/-',
                desc: "    500 views "
            }, {
                price: "Nu.120/-",
                desc: "    1000 views"
            }, {
                price: "Nu.190/-",
                desc: "    2000 views"
            }, {
                price: "Nu.260/-",
                desc: '    3000 views'
            }, {
                price: " Nu.320/-",
                desc: '    4000 views'
            }, {
                price: " Nu.470/-",
                desc: '    5000 views'
            }
        ]
    }
    let netflix = {
        data: [
            {
                price: "Nu 790/-",
                desc: "Netflix premium 4 screen one month subscription"
            }
        ]
    }
    let spotify = {
        data: [
            {
                price: "Nu  490/-",
                desc: "Spotify premium private one month"
            }
        ]
    }
    let amazon = {
        data: [
            {
                price: "Nu 350/-",
                desc: "Amazon prime video one month subscription"
            }
        ]
    }
    let soundcloud = {
        title1: "SoundCloud song plays",
        title2: "Sound cloud song likes",
        title3: "SoundCloud song downloads",
        data1: [
            {
                price: 'Nu.300/-',
                desc: "5000 songs plays "
            }, {
                price: "Nu.490/-",
                desc: "10,000 songs plays"
            }, {
                price: "Nu.660/-",
                desc: "20,000 songs plays"
            }, {
                price: "Nu.870/-",
                desc: '30,000 songs plays'
            }, {
                price: " Nu.999/-",
                desc: '40,000 songs plays'
            }, {
                price: 'Nu.1350/-',
                desc: '50,000 songs plays'
            }
        ],
        data2: [
            {
                price: 'Nu.250/-',
                desc: "    500 likes "
            }, {
                price: "Nu.500/-",
                desc: "    1000 likes"
            }, {
                price: "Nu.850/-",
                desc: "    2000 likes"
            }
        ],
        data3: [
            {
                price: 'Nu.150/-',
                desc: "1000 downloads"
            }, {
                price: "Nu.350/-",
                desc: "2000 downloads"
            }, {
                price: "Nu.550/-",
                desc: "3000 downloads"
            }, {
                price: "Nu.750/-",
                desc: '4000 downloads'
            }, {
                price: " Nu.950/-",
                desc: '5000 downloads'
            }
        ]
    }
    return (
        <div className={styles.service}>
            <div className={styles.home__imgContainer}>
                <div className={styles.home__info}>
                    <h1>SERVICES</h1>
                    <h3>DIGITAL MARKETING & PROMOTION</h3>
                   
                </div>
                <div className={styles.home__diagonal}></div>
            </div>
            <div className={styles.service__content1}>
                <SocialItem
                    Icon={Instagram}
                    title="Instagram"
                    mixed
                    item1={insta.data1}
                    item2={insta.data2}
                    item3={insta.data3}
                    title1={insta.title1}
                    title2={insta.title2}
                    title3={insta.title3}/>
                <SocialItem
                    Icon={Facebook}
                    title="Facebook"
                    blue
                    item1={facebook.data1}
                    item2={facebook.data2}
                    item3={facebook.data3}
                    title1={facebook.title1}
                    title2={facebook.title2}
                    title3={facebook.title3}/>
                <SocialItem
                    Icon={YouTube}
                    title="YouTube"
                    red
                    item1={youtube.data1}
                    item2={youtube.data2}
                    item3={youtube.data3}
                    title1={youtube.title1}
                    title2={youtube.title2} 
                    title3={youtube.title3}/>

            </div>
            <div className={styles.service__content1}>
            <SocialItem
                    Icon={SiTiktok}
                    title="TikTok"
                    black
                    item1={tiktok.data1}
                    item2={tiktok.data2}
                    item3={tiktok.data3}
                    title1={tiktok.title1}
                    title2={tiktok.title2} 
                    title3={tiktok.title3}/>
                    <SocialItem
                    Icon={Twitter}
                    title="Twitter"
                    twitterBlue
                    item1={twitter.data1}
                    item2={twitter.data2}
                    item3={twitter.data3}
                    title1={twitter.title1}
                    title2={twitter.title2} 
                    title3={twitter.title3}/>
                    <SocialItem
                    Icon={ImSoundcloud}
                    title="SoundCloud"
                    Soundcloud
                    item1={soundcloud.data1}
                    item2={soundcloud.data2}
                    item3={soundcloud.data3}
                    title1={soundcloud.title1}
                    title2={soundcloud.title2} 
                    title3={soundcloud.title3}/>
            </div>
            <div className={styles.service__content1}>
            <PremiumItem
                    Icon={SiNetflix}
                    title="Netflix"
                    red
                    item1={netflix.data}
                    />
                     <PremiumItem
                    Icon={AiFillAmazonCircle}
                    title="Amazon Prime Video"
                    orange
                    item1={amazon.data}
                    />
                     <PremiumItem
                    Icon={FaSpotify}
                    title="Spotify"
                    green
                    item1={spotify.data}
                    />
                   
            </div>
        </div>
    )
}
export default Service
