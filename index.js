require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// console.log("Cloudinary configuré avec succès !");

const offersData = {
  count: 32,
  offers: [
    {
      _id: "673df026bd1f513fcc91d806",
      product_name: "Vestido",
      product_description:
        "Vestido camisero estampado, tegido fluido satinado, talla S.",
      product_price: 25,
      product_details: [
        {
          MARQUE: "STRADIVARIUS",
        },
        {
          ÉTAT: "NEUF AVEC ÉTIQUETTE",
        },
        {
          COULEUR: "MULTICOLORE",
        },
        {
          EMPLACEMENT: " ANDALUCÍA, ESPAÑA",
        },
      ],
      product_pictures: [
        {
          asset_id: "aab071ffd3f7eb60c7675a62d709b5d3",
          public_id:
            "api/vinted-v2/offers/673df026bd1f513fcc91d806/myvgszogkkks7n5dlihc",
          version: 1732112423,
          version_id: "8845f5eb2300f006f9c915e25d89db3d",
          signature: "1ca3bb28f10ac1cb70593a798f90cb8fd1f4fa7f",
          width: 321,
          height: 800,
          format: "jpg",
          resource_type: "image",
          created_at: "2024-11-20T14:20:23Z",
          tags: [],
          bytes: 82936,
          type: "upload",
          etag: "b4cd79f0e0466d2b5e1da656e07763a1",
          placeholder: false,
          url: "http://res.cloudinary.com/lereacteur/image/upload/v1732112423/api/vinted-v2/offers/673df026bd1f513fcc91d806/myvgszogkkks7n5dlihc.jpg",
          secure_url:
            "https://res.cloudinary.com/lereacteur/image/upload/v1732112423/api/vinted-v2/offers/673df026bd1f513fcc91d806/myvgszogkkks7n5dlihc.jpg",
          folder: "api/vinted-v2/offers/673df026bd1f513fcc91d806",
          access_mode: "public",
          original_filename: "1644244740_xwwygk",
          api_key: "361833749344571",
        },
      ],
      owner: {
        account: {
          username: "Brooklyn_Anderson5",
          avatar: {
            asset_id: "c04b9e58e425a88949747476fe7ae206",
            public_id: "api/vinted-v2/users/673defe2bd1f513fcc91d78d/avatar",
            version: 1732112355,
            version_id: "8c970233dcafd9d022b2c8e4e1c4c414",
            signature: "ba1a0565b940162900e7deb2dc043d59232e409b",
            width: 420,
            height: 420,
            format: "png",
            resource_type: "image",
            created_at: "2024-11-20T14:19:15Z",
            tags: [],
            bytes: 1551,
            type: "upload",
            etag: "c4b6648ee7c3f756cbfc1887437a3f8f",
            placeholder: false,
            url: "http://res.cloudinary.com/lereacteur/image/upload/v1732112355/api/vinted-v2/users/673defe2bd1f513fcc91d78d/avatar.png",
            secure_url:
              "https://res.cloudinary.com/lereacteur/image/upload/v1732112355/api/vinted-v2/users/673defe2bd1f513fcc91d78d/avatar.png",
            folder: "api/vinted-v2/users/673defe2bd1f513fcc91d78d",
            access_mode: "public",
            original_filename: "66189305",
            api_key: "361833749344571",
          },
        },
        _id: "673defe2bd1f513fcc91d78d",
      },
      product_image: {
        asset_id: "f892816c3568fb360e9b1973f8d5e758",
        public_id: "api/vinted-v2/offers/673df026bd1f513fcc91d806/preview",
        version: 1732112423,
        version_id: "8845f5eb2300f006f9c915e25d89db3d",
        signature: "45982a3229b8ab3d8cd784202f95baf48f898779",
        width: 321,
        height: 800,
        format: "jpg",
        resource_type: "image",
        created_at: "2024-11-20T14:20:23Z",
        tags: [],
        bytes: 82936,
        type: "upload",
        etag: "b4cd79f0e0466d2b5e1da656e07763a1",
        placeholder: false,
        url: "http://res.cloudinary.com/lereacteur/image/upload/v1732112423/api/vinted-v2/offers/673df026bd1f513fcc91d806/preview.jpg",
        secure_url:
          "https://res.cloudinary.com/lereacteur/image/upload/v1732112423/api/vinted-v2/offers/673df026bd1f513fcc91d806/preview.jpg",
        folder: "api/vinted-v2/offers/673df026bd1f513fcc91d806",
        access_mode: "public",
        original_filename: "1644244740_xwwygk",
        api_key: "361833749344571",
      },
      product_date: "2024-11-20T14:20:22.499Z",
      __v: 0,
    },
    {
      _id: "673df028bd1f513fcc91d808",
      product_name: "Robe H&M 4/6 ans 🌟 Vestido H&M 4/6 años",
      product_description:
        "vestido de manga larga y pequeña falda de vuelo Color azul marino con dibujos frontales Marca H&M Talla 4/6 años ( 110 - 116 cm )apenas usado como nuevo",
      product_price: 5.9,
      product_details: [
        {
          MARQUE: "H&M",
        },
        {
          TAILLE: "6 ANS / 110-116 CM",
        },
        {
          ÉTAT: "NEUF SANS ÉTIQUETTE",
        },
        {
          COULEUR: "MARINE",
        },
        {
          EMPLACEMENT: "ESPAÑA",
        },
      ],
      product_pictures: [
        {
          asset_id: "76a510fcf9c4aac43a1db3de38387f7a",
          public_id:
            "api/vinted-v2/offers/673df028bd1f513fcc91d808/sn9idggm58yuxw1omvsi",
          version: 1732112425,
          version_id: "69df678c4aabd5fc450375f5487c42ef",
          signature: "67e6ff1a93f8857aadc241d1744b57c3e93636fe",
          width: 600,
          height: 800,
          format: "jpg",
          resource_type: "image",
          created_at: "2024-11-20T14:20:25Z",
          tags: [],
          bytes: 179645,
          type: "upload",
          etag: "88091d8e253dd790f6d39208c98b9e8f",
          placeholder: false,
          url: "http://res.cloudinary.com/lereacteur/image/upload/v1732112425/api/vinted-v2/offers/673df028bd1f513fcc91d808/sn9idggm58yuxw1omvsi.jpg",
          secure_url:
            "https://res.cloudinary.com/lereacteur/image/upload/v1732112425/api/vinted-v2/offers/673df028bd1f513fcc91d808/sn9idggm58yuxw1omvsi.jpg",
          folder: "api/vinted-v2/offers/673df028bd1f513fcc91d808",
          access_mode: "public",
          original_filename: "1644244494_exsg40",
          api_key: "361833749344571",
        },
      ],
      owner: {
        account: {
          username: "Gavin61",
          avatar: {
            asset_id: "14e6d428f3e61b79c78528371ac23866",
            public_id: "api/vinted-v2/users/673defe2bd1f513fcc91d798/avatar",
            version: 1732112355,
            version_id: "8c970233dcafd9d022b2c8e4e1c4c414",
            signature: "cbed772806ee4f4d3cacf09a3b62a5696c04084f",
            width: 420,
            height: 420,
            format: "png",
            resource_type: "image",
            created_at: "2024-11-20T14:19:15Z",
            tags: [],
            bytes: 1552,
            type: "upload",
            etag: "752388489553302fed6095e1e1295b85",
            placeholder: false,
            url: "http://res.cloudinary.com/lereacteur/image/upload/v1732112355/api/vinted-v2/users/673defe2bd1f513fcc91d798/avatar.png",
            secure_url:
              "https://res.cloudinary.com/lereacteur/image/upload/v1732112355/api/vinted-v2/users/673defe2bd1f513fcc91d798/avatar.png",
            folder: "api/vinted-v2/users/673defe2bd1f513fcc91d798",
            access_mode: "public",
            original_filename: "96719109",
            api_key: "361833749344571",
          },
        },
        _id: "673defe2bd1f513fcc91d798",
      },
      product_image: {
        asset_id: "0eb1974766d9cf823193501856908fb6",
        public_id: "api/vinted-v2/offers/673df028bd1f513fcc91d808/preview",
        version: 1732112424,
        version_id: "e679d5cfbb2d4e95905fb65bce911964",
        signature: "56a95ef2dc07e8012413735d63161c547d99e437",
        width: 600,
        height: 800,
        format: "jpg",
        resource_type: "image",
        created_at: "2024-11-20T14:20:24Z",
        tags: [],
        bytes: 179645,
        type: "upload",
        etag: "88091d8e253dd790f6d39208c98b9e8f",
        placeholder: false,
        url: "http://res.cloudinary.com/lereacteur/image/upload/v1732112424/api/vinted-v2/offers/673df028bd1f513fcc91d808/preview.jpg",
        secure_url:
          "https://res.cloudinary.com/lereacteur/image/upload/v1732112424/api/vinted-v2/offers/673df028bd1f513fcc91d808/preview.jpg",
        folder: "api/vinted-v2/offers/673df028bd1f513fcc91d808",
        access_mode: "public",
        original_filename: "1644244494_exsg40",
        api_key: "361833749344571",
      },
      product_date: "2024-11-20T14:20:24.443Z",
      __v: 0,
    },
  ],
};

// Endpoint pour retourner les données statiques
app.get("/", (req, res) => {
  res.json(offersData);
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
