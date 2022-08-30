

const blogs = [
    {
        key: 0,
        date: "29/08/2019",
        title: "Tittle 1",
        context: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis provident fuga perspiciatis quasi, magni, minima fugit exercitationem velit, labore eligendi corrupti iusto modi eius! Consectetur, esse odio distinctio recusandae officia reiciendis repellendus aliquid facere veniam minus necessitatibus reprehenderit unde eos voluptates quisquam soluta quaerat alias voluptatem ipsam illum facilis sed nesciunt enim. Fugit quo nobis inventore debitis praesentium, ratione officiis quae ea pariatur incidunt est omnis asperiores odit neque dolorem, eius, libero magni sint! Ullam nulla id nisi explicabo ea alias numquam culpa eaque dolore temporibus doloribus veritatis autem nemo eos enim nostrum facere        atque, iusto sint quam, quos, dolorem sapiente ducimus. Alias culpa        repudiandae id. Maxime quas neque laboriosam beatae repellendu        inventore animi adipisci debitis sapiente atque excepturi quasi quod        consectetur quam, tempora error rerum perferendis recusandae blanditiis.        Voluptatibus incidunt nam vitae. Dicta voluptatum dolore doloribus ipsum        omnis obcaecati incidunt. Beatae, accusantium. Ipsam obcaecati amet        maxime commodi, rem pariatur. Possimus illo nihil nisi eaque sint        eveniet reiciendis itaque corporis repellendus fuga dolore hic excepturi        assumenda, quisquam aspernatur dicta aliquam id consequuntur incidunt.        Aut excepturi cupiditate incidunt ea veniam vel voluptate, quaerat porro        recusandae itaque fuga quia neque numquam nostrum explicabo non fugiat        facere possimus! Pariatur atque maxime nam voluptate.",
        image:"https://source.unsplash.com/1920x1080/?nature",

    },
    {
        key: 1,
        date: "29/08/2019",
        title: "Tittle 2",
        context: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis provident fuga perspiciatis quasi, magni, minima fugit exercitationem velit, labore eligendi corrupti iusto modi eius! Consectetur, esse odio distinctio recusandae officia reiciendis repellendus aliquid facere veniam minus necessitatibus reprehenderit unde eos voluptates quisquam soluta quaerat alias voluptatem ipsam illum facilis sed nesciunt enim. Fugit quo nobis inventore debitis praesentium, ratione officiis quae ea pariatur incidunt est omnis asperiores odit neque dolorem, eius, libero magni sint! Ullam nulla id nisi explicabo ea alias numquam culpa eaque dolore temporibus doloribus veritatis autem nemo eos enim nostrum facere        atque, iusto sint quam, quos, dolorem sapiente ducimus. Alias culpa        repudiandae id. Maxime quas neque laboriosam beatae repellendu        inventore animi adipisci debitis sapiente atque excepturi quasi quod        consectetur quam, tempora error rerum perferendis recusandae blanditiis.        Voluptatibus incidunt nam vitae. Dicta voluptatum dolore doloribus ipsum        omnis obcaecati incidunt. Beatae, accusantium. Ipsam obcaecati amet        maxime commodi, rem pariatur. Possimus illo nihil nisi eaque sint        eveniet reiciendis itaque corporis repellendus fuga dolore hic excepturi        assumenda, quisquam aspernatur dicta aliquam id consequuntur incidunt.        Aut excepturi cupiditate incidunt ea veniam vel voluptate, quaerat porro        recusandae itaque fuga quia neque numquam nostrum explicabo non fugiat        facere possimus! Pariatur atque maxime nam voluptate.",
        image:"https://source.unsplash.com/1920x1080/?landscape",

    },
    {
        key: 2,
        date: "29/08/2019",
        title: "Tittle 3",
        context: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis provident fuga perspiciatis quasi, magni, minima fugit exercitationem velit, labore eligendi corrupti iusto modi eius! Consectetur, esse odio distinctio recusandae officia reiciendis repellendus aliquid facere veniam minus necessitatibus reprehenderit unde eos voluptates quisquam soluta quaerat alias voluptatem ipsam illum facilis sed nesciunt enim. Fugit quo nobis inventore debitis praesentium, ratione officiis quae ea pariatur incidunt est omnis asperiores odit neque dolorem, eius, libero magni sint! Ullam nulla id nisi explicabo ea alias numquam culpa eaque dolore temporibus doloribus veritatis autem nemo eos enim nostrum facere        atque, iusto sint quam, quos, dolorem sapiente ducimus. Alias culpa        repudiandae id. Maxime quas neque laboriosam beatae repellendu        inventore animi adipisci debitis sapiente atque excepturi quasi quod        consectetur quam, tempora error rerum perferendis recusandae blanditiis.        Voluptatibus incidunt nam vitae. Dicta voluptatum dolore doloribus ipsum        omnis obcaecati incidunt. Beatae, accusantium. Ipsam obcaecati amet        maxime commodi, rem pariatur. Possimus illo nihil nisi eaque sint        eveniet reiciendis itaque corporis repellendus fuga dolore hic excepturi        assumenda, quisquam aspernatur dicta aliquam id consequuntur incidunt.        Aut excepturi cupiditate incidunt ea veniam vel voluptate, quaerat porro        recusandae itaque fuga quia neque numquam nostrum explicabo non fugiat        facere possimus! Pariatur atque maxime nam voluptate.",
        image:"https://source.unsplash.com/1920x1080/?seascape",

    },
    {
        key: 3,
        date: "29/08/2019",
        title: "Tittle 4",
        context: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis provident fuga perspiciatis quasi, magni, minima fugit exercitationem velit, labore eligendi corrupti iusto modi eius! Consectetur, esse odio distinctio recusandae officia reiciendis repellendus aliquid facere veniam minus necessitatibus reprehenderit unde eos voluptates quisquam soluta quaerat alias voluptatem ipsam illum facilis sed nesciunt enim. Fugit quo nobis inventore debitis praesentium, ratione officiis quae ea pariatur incidunt est omnis asperiores odit neque dolorem, eius, libero magni sint! Ullam nulla id nisi explicabo ea alias numquam culpa eaque dolore temporibus doloribus veritatis autem nemo eos enim nostrum facere        atque, iusto sint quam, quos, dolorem sapiente ducimus. Alias culpa        repudiandae id. Maxime quas neque laboriosam beatae repellendu        inventore animi adipisci debitis sapiente atque excepturi quasi quod        consectetur quam, tempora error rerum perferendis recusandae blanditiis.        Voluptatibus incidunt nam vitae. Dicta voluptatum dolore doloribus ipsum        omnis obcaecati incidunt. Beatae, accusantium. Ipsam obcaecati amet        maxime commodi, rem pariatur. Possimus illo nihil nisi eaque sint        eveniet reiciendis itaque corporis repellendus fuga dolore hic excepturi        assumenda, quisquam aspernatur dicta aliquam id consequuntur incidunt.        Aut excepturi cupiditate incidunt ea veniam vel voluptate, quaerat porro        recusandae itaque fuga quia neque numquam nostrum explicabo non fugiat        facere possimus! Pariatur atque maxime nam voluptate.",
        image:"https://source.unsplash.com/1920x1080/?land",

    },
    {
        key: 4,
        date: "29/08/2019",
        title: "Tittle 5",
        context: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis provident fuga perspiciatis quasi, magni, minima fugit exercitationem velit, labore eligendi corrupti iusto modi eius! Consectetur, esse odio distinctio recusandae officia reiciendis repellendus aliquid facere veniam minus necessitatibus reprehenderit unde eos voluptates quisquam soluta quaerat alias voluptatem ipsam illum facilis sed nesciunt enim. Fugit quo nobis inventore debitis praesentium, ratione officiis quae ea pariatur incidunt est omnis asperiores odit neque dolorem, eius, libero magni sint! Ullam nulla id nisi explicabo ea alias numquam culpa eaque dolore temporibus doloribus veritatis autem nemo eos enim nostrum facere        atque, iusto sint quam, quos, dolorem sapiente ducimus. Alias culpa        repudiandae id. Maxime quas neque laboriosam beatae repellendu        inventore animi adipisci debitis sapiente atque excepturi quasi quod        consectetur quam, tempora error rerum perferendis recusandae blanditiis.        Voluptatibus incidunt nam vitae. Dicta voluptatum dolore doloribus ipsum        omnis obcaecati incidunt. Beatae, accusantium. Ipsam obcaecati amet        maxime commodi, rem pariatur. Possimus illo nihil nisi eaque sint        eveniet reiciendis itaque corporis repellendus fuga dolore hic excepturi        assumenda, quisquam aspernatur dicta aliquam id consequuntur incidunt.        Aut excepturi cupiditate incidunt ea veniam vel voluptate, quaerat porro        recusandae itaque fuga quia neque numquam nostrum explicabo non fugiat        facere possimus! Pariatur atque maxime nam voluptate.",
        image:"https://source.unsplash.com/1920x1080/?sea",

    },
    {
        key: 5,
        date: "29/08/2019",
        title: "Tittle 6",
        context: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis provident fuga perspiciatis quasi, magni, minima fugit exercitationem velit, labore eligendi corrupti iusto modi eius! Consectetur, esse odio distinctio recusandae officia reiciendis repellendus aliquid facere veniam minus necessitatibus reprehenderit unde eos voluptates quisquam soluta quaerat alias voluptatem ipsam illum facilis sed nesciunt enim. Fugit quo nobis inventore debitis praesentium, ratione officiis quae ea pariatur incidunt est omnis asperiores odit neque dolorem, eius, libero magni sint! Ullam nulla id nisi explicabo ea alias numquam culpa eaque dolore temporibus doloribus veritatis autem nemo eos enim nostrum facere        atque, iusto sint quam, quos, dolorem sapiente ducimus. Alias culpa        repudiandae id. Maxime quas neque laboriosam beatae repellendu        inventore animi adipisci debitis sapiente atque excepturi quasi quod        consectetur quam, tempora error rerum perferendis recusandae blanditiis.        Voluptatibus incidunt nam vitae. Dicta voluptatum dolore doloribus ipsum        omnis obcaecati incidunt. Beatae, accusantium. Ipsam obcaecati amet        maxime commodi, rem pariatur. Possimus illo nihil nisi eaque sint        eveniet reiciendis itaque corporis repellendus fuga dolore hic excepturi        assumenda, quisquam aspernatur dicta aliquam id consequuntur incidunt.        Aut excepturi cupiditate incidunt ea veniam vel voluptate, quaerat porro        recusandae itaque fuga quia neque numquam nostrum explicabo non fugiat        facere possimus! Pariatur atque maxime nam voluptate.",
        image:"https://source.unsplash.com/1920x1080/?sunset",

    }
]



export default blogs;