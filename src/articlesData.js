import { Link } from "react-router-dom"

import article1 from "./images/article-1.jpeg"
import article2 from "./images/article-2.jpeg"
import article3 from "./images/article-3.jpeg"
import article4 from "./images/article-4.jpeg"
import article5 from "./images/article-5.jpeg"

export const articlesData = [
  {
    id: 1,
    title: "GRAND CRU MADE IN CHINA",
    subTitle: "Documentary Film, 2021",
    reference: "ARTE (France / Germany), CCTV (China)",
    imageLink: article1,

    showPageContent: {
      title: "GRAND CRU MADE IN CHINA - Birth of a Wine Giant?",
      subText:
        "52 min Documentary Film on the Rise of the Chinese Wine industry. Featuring some of the most famous vineyards such as Kanaan, Silver Heights, Xige, Lafite Longdai and presented by Master of Wine Julien Boulard. Distributed in Mandarin, English and French.",
      fileLinks: [
        {
          title: "",
          link: "https://player.vimeo.com/video/673154803?h=005094abd5&",
          type: "video",
        },
      ],
    },
  },

  {
    id: 2,
    title: "BUDWEISER: REDIC",
    subTitle: "Documentary Short Film, 2022",
    reference: "Client: Budweiser US",
    imageLink: article2,

    showPageContent: {
      title:
        "BUDWEISER: REDIC | Poet, Musician, Artist, Fashion Designer | From Chicago To Shanghai",
      subText:
        "Sponsored Documentary Short for Budweiser US on an African-American multidisciplinary artist living in China.",

      fileLinks: [
        {
          title: "",
          link: "https://player.vimeo.com/video/685016604?h=b48e7dd3b8&",
          type: "video",
        },
      ],
    },
  },

  {
    id: 3,
    title: "50 YEARS BELGIUM-CHINA: STORIES OF FRIENDSHIP",
    subTitle: "11 Documentary Short Films, 2021",
    reference: "Client: Embassy of the Kingdom of Belgium in China",
    imageLink: article3,

    showPageContent: {
      title: "50 YEARS BELGIUM-CHINA: STORIES OF FRIENDSHIP",
      subText:
        "To celebrate the 50th anniversary of diplomatic relations between Belgium and China we filmed 11 documentary short films for the Belgian Embassy in China. These are a few of my favorite films:",

      fileLinks: [
        {
          title: "Football (feat. Chris Van Puyvelde)",
          link: "https://player.vimeo.com/video/668986322?h=606df35a18&",
          type: "video",
        },
        {
          title: "Pigeon",
          link: "https://player.vimeo.com/video/668978742?h=bcbf1a22b0&",
          type: "video",
        },
        {
          title: "Tintin",
          link: "https://player.vimeo.com/video/668968844?h=92cd32b008&",
          type: "video",
        },
        {
          title: "Beer",
          link: "https://player.vimeo.com/video/668956475?h=4f3d44d314&",
          type: "video",
        },
        {
          title: "Gastronomy",
          link: "https://player.vimeo.com/video/670868495?h=af89ae33c4&",
          type: "video",
        },
        {
          title: "Chocolate",
          link: "https://player.vimeo.com/video/670863788?h=10f864d2b9&",
          type: "video",
        },
        {
          title: "Medical",
          link: "https://player.vimeo.com/video/670872504?h=fe174930f3&",
          type: "video",
        },
        {
          title: "Fashion",
          link: "https://player.vimeo.com/video/670880966?h=ce42cc02bc&",
          type: "video",
        },
      ],
    },
  },

  {
    id: 4,
    title: "SHANGHAI LOCKDOWN STORIES",
    subTitle: "Documentary Series, 2022",
    reference: "Personal Project",
    imageLink: article4,

    showPageContent: {
      title: "SHANGHAI LOCKDOWN STORIES - A Personal Project",
      subText: (
        <p>
          In March 2022 Shanghai went into an unprecedented hard lockdown.
          <br />
          It was supposed to take four days. It lasted two months.
          <br />
          <br />
          I conducted 30 interviews with fellow residents about their
          experiences. <br />
          The entire interview series can be found{" "}
          <Link to={"https://twitter.com/chris__pc/status/1531177386246434816"}>
            in this Twitter thread
          </Link>
          .
        </p>
      ),

      fileLinks: [
        {
          title: "",
          link: "https://youtu.be/6Ho_s4WES3U",
          type: "video",
        },
        {
          title: "",
          link: "https://youtu.be/jLI7Jv4DSdA",
          type: "video",
        },
        {
          title: "",
          link: "https://youtu.be/Ru61r9Lwk2A",
          type: "video",
        },
        {
          title: "",
          link: "https://youtu.be/rnSoGrsXjg4",
          type: "video",
        },
        {
          title: "",
          link: "https://youtu.be/f1eHHpyNLXY",
          type: "video",
        },
        {
          title: "",
          link: "https://youtu.be/uWf2nZftRvQ",
          type: "video",
        },
        {
          title: "",
          link: "https://youtu.be/-hYhHWqgCNc",
          type: "video",
        },
        {
          title: "",
          link: "https://youtu.be/KkBUZ1z6tCQ",
          type: "video",
        },
        {
          title: "",
          link: "https://youtu.be/R7JwejzNv6g",
          type: "video",
        },
        {
          title: "",
          link: "https://youtu.be/qluI0e_Dsv4",
          type: "video",
        },
      ],
    },
  },

  {
    id: 5,
    title: "PORSCHE TAYCAN: THE TRACK",
    subTitle: "Commercial, 2021",
    reference: "Client: Porsche China",
    imageLink: article5,

    showPageContent: {
      title: "PORSCHE TAYCAN: THE TRACK",
      subText: (
        <p>
          Launch Commercial for perhaps the most exciting electric sportscar to
          come to China ever.
          <br />
          China, 2021
        </p>
      ),

      fileLinks: [
        {
          title: "English Version",
          link: "https://player.vimeo.com/video/465112174?h=44b772982c&",
          type: "video",
        },
        {
          title: "Chinese Version",
          link: "https://player.vimeo.com/video/465110485?h=328f589005&",
          type: "video",
        },
      ],
    },
  },
];
