(This application was created using "npx create-react-app")

## Adding new articles to your website

To add new articles to your website, you only need to edit the "articlesData.js" file that contains all the information about your articles.

Each article is represented as an object inside the articlesData array. Here's an explanation of the purpose of each attribute:

- id: A unique identifier for each article. Make sure to provide a new id for each new article you add.
- title: The title of the article.
- subTitle: A short subtitle for the article, usually providing additional information or context about the content.
- reference: A reference to the source or publication where the article was originally published or featured.
- imageLink: A link to the image you want to use as a thumbnail for the article.
- showPageContent: An object that contains the content of the article's show page, which is the page that displays the full content of the article. This object has the following attributes:
- title: The title of the article as it will appear on the show page.
- subText: Additional text that will appear on the show page, usually providing more details about the content of the article.
- fileLinks: An array that can contain multiple links to files, such as videos or images, that you want to display on the show page.

To add a new article, simply create a new object following the same structure as the existing articles, and add it to the articlesData array. Make sure to provide a new id for each new article you add.

For example, to add a new article with a title "My new article", a subtitle "A story about my cat", and an image located at "myimage.jpg", you can add the following object to the articlesData array:

```
{
  id: 2,
  title: "My new article",
  subTitle: "A story about my cat",
  reference: "",
  imageLink: "myimage.jpg",
  showPageContent: {
    title: "My new article",
    subText: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        elementum, velit vitae malesuada tempus, sapien velit vestibulum nisl,
        quis dictum tellus neque quis est.
      </p>
    ),
    fileLinks: [
      {
        title: "",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        type: "video",
      },
      {
        title: "",
        link: "https://picsum.photos/800/400",
        type: "image",
      },
    ],
  },
},
```

That's it! Once you save the "articlesData.js" file, the new article will automatically be added to your website.
