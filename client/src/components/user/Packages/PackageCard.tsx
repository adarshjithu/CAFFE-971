import { useNavigate } from "react-router";

const ProductCard = ({ 
  imageUrl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABFEAABAwMCBAMEBgYIBQUAAAABAgMEAAUREiEGEzFBIlFhFDJxgQcVI0KRoVJiscHR4RYkM0NykqLwU2PC0vE0c4KDk//EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAArEQACAgEEAQIEBwEAAAAAAAAAAQIRAwQSITETIkEFFDKhFUJRYYGRseH/2gAMAwEAAhEDEQA/AOWoG1ekVs2K9I8qwNnVSGG17xE1eZ/tBVC0H+qfKrzXviuZm7Zuxq0S3IZYoA6KYbhuxtS46avB0FMhUNqhPWrIGQajUjB6VqQhltpOY4oTIR9qaOsIzHwKEyEYeVtUwvlg5Y8FZDWTU7LYD6a9A01Iw246/wDZJKtO5xT5PgzpchQe5ioI0dp5wpcWE46VK1qcUW0pUVZAwBRrh7hcXFbv1kVMKSrwjVgmhj1yVLvg9tHBzNwdyiac4yUjvTbB+ju0MBKp0h5Th7BzAq9w7wqIc3mOOksBOAEnc0zOwbYVBTilKUOhJO1SUMl+kFTjXIsOcB8MLeQ2XHuZ/wC+qpGuCOGoznL1OKUo9FPKP76OriWrXq0nUO+9RqRZwsKUkFQ89zSn5/ev7L9H6lFfCXDjDiULZClq6ArVv+dXXbBw/EbClW1oad86M1MVWnWHVNpK09FEbipHLnbiNhzM9gM0xKau6AfNIoxGrNJdUmNFQNHXw4r2TZ7Sp0FUFtaz2CAanN2tSM8tkgnrhAFVhfLe24pSGSFeeKCptU2gtq/QjcsrGfsYLIT6gCp0GBFAaftzYJ2B0JOa8jXpuZJCGWlJ1dSRRObEShjmqWFYGRkVHhyVcGVuh0xM4kskSavkiOE83oG09KCx+EY9k5bqGMLB94CmiVe1Rnda0I0I79xSy7x4ZEpTS1JCAcJJFBDHli73fwG/G1t2jM2sNx0OOJKQR1qwkpUkKSskHpSkm7z7y4qDFUgJAzzO2KMR7fKbZQgyyCB2G1dFOzFJKLpnFEVvitUVuOtZWzpJBqzn+rkelX2/7QUOs5+yV8KvpPiHxrn5vqZtxdF2YnMf5UuuI3plfGY3yoEtHi2GarA6JMhaazW7jGEk1YaQeyT+FSrYfcSQ2w4T+qgmtFiuEeW9Gpoihk5AbkEGj9tt0/HhhyP/AMjVSfw9en3ypu2SVf8AwxV4r3A5Wv1Fl9zBwKliOSY4L0bUoY8SU9cUUPBXEjisi1PYPmpI/fTDwrwpfILzxl28JQtGBqcQa2LhGOTT9wLb5siOpp+PhCtQJ1Jz+NOYSiW17a2tL7+M5JOPkKMW7hrD6XpLMIqAxh1QI/IUTkokw0JagqtbaQOmDt+VKzYXmSp0ViyrE3xYFi3W9pjkpaaUpPQBJ6VJPY4kuUTmNSGI6x0AQcmr6J93xh2VbkY3OhCjVt64lQQVXRLRA3DcZRyavxTqlMDfjf5RSjs8XNvgLSHEo6qH36vzmb4xy1QoAfWv+0KlDKaKJmrUrK7lMKcfci4z+NbJkMFC+ZcbknI2OlCcflQ+CT/MTyQXNA5xN1LGFRni5jdIAxmrUOPc3IoHs5jrA9KNwLQxNi8xNzuCxj3ivf8AIUFkWgKkvobuM4Ib/ScNBL4fxzJjY6xXwgfc7Vek4VHWEOZzqJGDVF+LfXGOVKEUHHvB3Sav3KySGYJdblvOLzkFbqunlSxKuDw0iehZKfCD1FWsCxoksnk7CUZu720p5EhnPfmO5ou7xDc+UhqY9E23Okb0jruLOdQIJCvOtnbs8rUSkEfCruSIsUV7jFcpcGe6OfIDYA8WjO9C3rVw262eXIw6fvpSetUmpfNcjtJYBU4vv0xW8hxxiWppTSCMZ2pSgrvn+x+5pbWE7fJslkAK5Ty31J8JQKw8XLUcsqWpv7pLe5pbYbTOvcNBQEgLxv3ya6amFGQkITHaAG3uiuhjto5uVJSOHIrcDetE7dakSM71mZ0kgnaD4VfCr/3hQ60Y33H41fUSEnQQFY7+dYsi9Zqx8Kxgtjkd9HL5jK3gnUltRGVDv86OOxba1CbkrieEqSkctO3XfJpWtfCn1lDiXJmTyJLqAtWE+6roabYNsnFLjLLaXVFP2qRshQ8wD0roYYqCUUrOTqXKUruipxVeoMNQj2dqOkIHjSMYB+NX/o1uBnxX1yHgkpUcJSOvzNX7dwgyhrL1saVnOULcwR+FG7daU29GI1vab8gFdKONqdtAPmNJkinEKKg2y8vSOvMIFKlwu15VMU3D4fXobPiW7IzqHpg04+zvuvBx5pKdIwAF7H5d60eiS3GnUe3JZ1KyhSGN0jy32NXOWST9KoDYvdiqviP2VGibaOTJIGlhKi4pe/bFERKnqaadTam0pdxpBbOR8R2qxO4fiTmm0zJj/NaUFNvoKW3AR6ircZEOCnx3lxzHZ59B/dQR867L2xsHTpy7Wyh+5paaZWsI+xa1nJ6bCoGblCuzK3bfdm20oXy1JW0AoK9c0XeudtCUlcmKsg7anU7YoMZ3DCXFKQbaXFL1Kwc79c7Crl5PZh0iK+wZ0KA5KbubrmhJ8CWk5J7YoNY7Rf7vEVKly32MY5basBR/hTKLzbn8radiKyoHPjIPyxREuuJb1iZDQkj9BVRQytlPZdi0ODJytReurxScEJCzk+dBv6M8TMSHFwn2CEKUC074iE9sZ600TL/Ejuct27xELHm0vH44xVeRfA+gJhXOIXDvqQpHT4Gq2u+GRwi10a8OXjiK3W2QxIs7bjjWcHnBIUfQUVhxpMlLkp5aEF3BKFJ930pZl3qVHlhDk50MkDD5SnGfXHSpFy5K0jVPkLSfJfWqllcfqZcMC7QUvsW4HAivJUgdkmqcO0LcwZrTIAGfEoHNVRGaeP2siQc/84iqjMeL7KXFuqcIUdys9M/GhWZXY14XVEPFvClslKSuB7JEcCftNT2E58wBSjItblsSlP1rHkg9WkZOPmRtT0n6ncGlIaW6UnbJJ2BNIV0UDLjCG0Fj2VpaiOmvfIPr0o1PeDs2UX4CkpmxFEjTgkYOe1bSl65rihvtVWGmaG0yZbaEjokgYwKKQUTFr+zh8xtX3yKTVy4H7qjyQ8L2uRceIWEsJP2fjWewArqirLKKj42hSzw3IRAlLbiRFOSCMLKeg+faj5fv7hKtDSAfu9cU6EmlyZ5xjJ2jmirKEzVMW3h1t9KTjW+8oj8lAfnTfYOFkuK/rdksCNPvJxrUPzNALd7K+XHnVLeVqICSvYY22xVCRdvYHpMNiQQVtKXqGSo/q6h3HwrPDUqWRqMejVk00oQTbOmt2iDGfLCI9ljrTuU8hIOPnVqPEZeGWJNsWOmWWUqA9Nq5Oxfn3IrQDiXOeNK1KfUQnA2OFfmc4qw8zEuEXE1a4zjaEurXGcGTn9YZB8/OtDzpPmJkjhvuR1hMde6G7i2nHZDA2pMvHE89mc81aphlMRtnXVpwlah1Ccdh5+dIb1oXGOoOSOatBVlvWScEjt36fjUPDXEMRqAqM+0646kFAZSnUV5ocuonKD8SNOLRxhNeR99HWYF5jSYDMqfcJsYLT4vGCAryG24wMiqMri2zRn0sl+5vrLYXpC0536ADvSuYgukaGUzCy6gKLQ+8pHulC9+o6Z27VB9XMyEvvqWhxbWA03JCdbZ2BHQEHqc570payVcsueg9TcFaOkvybU1DbkyXJOlYB0h3JGRnG1D1XWzFX2MKc6dWnBURSmuS2YOHFsssN5QFrkJUlWxB333HkfSq0TXzYzhUBy28KJT0V4j8BkbZz8qHJq8z6pBQ0uKK9aY4v3mxNoGq3SCpQ2S5qB9OtLNzvNvAlLeiNx1NsFTSFZIK98A79M9agSl594KkTkHUo4DPurT3OOxGDuM1DcY0oqlGCtt1ICNyD4QeoP8AGkPPknJKTNUdPgUXs5YOtt8izr+xJ5TNsWptLTkR1nLCzk7kk9TnGdu1GL+AmfHksRIcVKA4k8ljIOoYycdSMbE+dLN1huOuobciNNc3OkkHJPf0xnG9WXnZbjMaM2qK+6MlyOkLVy0p+8dztufKtDk5NNMS8ez8thLhHiQcOMqgKhrkR9eQ48zpUnI3BJHfHT41cncWcTiK27FPgU8pXMbbCwdXRKgRgYx6daXQ6lo9SkKQEBLbuME98kHfarkKO8XOVGbkpdAOtaniEkHO+MAf770fkr3FeJy52m0ziu4qQ39c22E6RnK3YuNh1zg4Hxqm9Ihy1l5VnEdKUgq5ThHX0q/Iw+Ibc0KbaV4W1+HSQABgHp649elCbhCmsuLjraeeYJIDzCSQvy2AyP8AfShjFSdjJweOJX+tBFlkwluLjYytp05KBn8+tFGn/bY4cti+Zp9+NrIKPh/ChcTh+7yn+czZpecDUoNKTvt01daZY3BF6XckTmmVwRjDgS0oFwZ/DJp7SumjM0qtMAsXhCpBjT0uRlk4QpSsoX8FU8xYzQ4eQUpH9iAAD6VNcOEZEqO8hyKdLm61LQDp9d+nxobaWTAju21RcwjHJC1FWpON8H49u1LyQilwTHNt0wXY2eTLDytsJd3/APrVTFw/b4qW2pkltCo2jOoEUOlAWuO4/J0oRy1JGTvkpIxj50iwLjPgQXWVSHlxjnCEnpUhcokycSOl8Rps8iIj6tdCzr8QQrOKBW5+8odVGaQ2YecJXnCgKpfR+2k215x4FepwkZ7U3222xHM6ytJKs7E4o1FKQtye2kM9hi2+3RE4cRzFeJZJGSaJ+2Rf+Iml1u22uOB7Qv4alUcZYh8pOhCCnGx2o7B5OcQuELythbS4q44KwQvz+I2747+dYOCrwzIy3CStCQNRKkgunz67V1KK9LS2DJENC/NLgxUr84JT/wCpiIPqvNVHTQXI+WuyS4OZWXhK/RWSlVuaQQVJQeck4BOR+2iTPBdxZCnocSNGec8a0oXhKlY+G3rTq3do6Dh+bGUPJIrFXmAOsvf0RVPTYbu/uV81lfCX2F1nheevT7UmKCfe0LJB/LtvWw4LcLm6mNOkAYSck+Zxt1o0q/QU9X31b493+daKvsMnA9oJ+IofltPf/SfM6jvoDM8CvAKL0xtRVnOljbqSNie23xxUv9Bm3AC9K1OaQHHEtBJWex940SRd4ritmJCj6b1EbywgkBiQD+t/4qPDp4+3+lrUalvh/wCFV7ga1vN8qQVLbCtehWCNXnWyODLUjolek4ynWNO3f3arPcQBK8gqSM9dSTj5YFePcQ6Egqno9AUaT++gi9OwpPU9tssHg2xJSQI+nJzlCyDk9dx8BU6OEbSpSl8hSlK97xL3/wBVUYd95ziGn3A426cBYVj5E0Hm26azc1pZkPGK6T4FvqJRmjfjSvaLUsnW6htHD1tQMIht7d//ACDVRXDllbkmR7FED56uqSNX44pElWuaHlJLqCB5qJqsqxvL3U41n4E0KywXUQql7yOgOQ7K0cKNsRjspCf+6tFSrQwnH1hbUJ/UCB/1GuevcOLcUF+0IBA7N/zrQ2I6cKkZ9dFTz/sXsv3Hty/WVpvw3ppISf7vRt/oNQHia0kZTepDgIyCgDf/AECuezbMmNHedS4tRSkqwSMbVdtKrSI7emPOW6ppIUS8hIzjthNX5eLIoe1ji7eYCgCJs1eoZ2WR1qL2+2hCVZnK1K07SFj/AKqQnblKQsobwlKdkjrgdhnv8akhS5TzqQ45kA5xih8mTsnjgP0h+ImaiJy3ftUKUFOPrUMDHXf1oazdi5KTb4sdmO0pWjW2nxAdDjPSpGIyXHn/AGh9fhWgJBP6ifwoPKULJKcmSWFqQyorx+kKKU5cARiuRv8AqKE+6C8gulPTXvirKuHLe4hSFRWwkjB27VX4U4psl+0MxJKG3CP7Nw6TUs525zZ7sSI40xESrSl5s5Urz9BWiqEuQNi2O18Pshp2UG0FZUhobqVntjqaIMsyJKf6pGEVn/iOjxH4CitrskK3t93nz7z7m6z86sezlavEsqQOgFVtJdgpFqihpYV9s+pJHNX4sZohDbZjRW2UJISgYFWnQhhsEJGM1VSAU5PWhkg0auu2JoaVl5XzNQGVw7zUt8lSlqxgaqW58KTyXElS1yFNgJVpOB8MVrFtyMRnEO65DOCf0gK5cviORvpL+DYtLhS+pjOuZZmkqX9XZSnqonIFRou0FTSnmrQzyh987igzDkdLjynnW9yffdzj5VpFmwVQ3cO6+Ud9AOnr5HrS/n8z6pfwU8OFfuF08QMjUlEWGg5BwUdj0NWFXaTpCkhlCQMnS303xS4HmJB5sZhlIVjPMBJX8vKoXroWsRZslS1uOYSlsaUgemKkPiGXlPkP5WLppBdPFD2m5rddHKhqSELRsFZ88b43qV67ylzW4TEkLeW3zSdPhA9BQKTCjvMOsq1tqeWCoI+/jpn8KnWgxZyC2pQc5YC1HyxWeerlPm2aY6aC6QblOPtNLdUWXQCAApsGg1zLbmpL9tZcJHVoFBxU0mS7FjLKXVOhKtRKRnb0oU7cHJDfO3Vnrq2IqfMZYkx6e+wRoQysvQ1OlsnDrC+qfWi3tcp4suNuqMljxJz99PlVR5wlSZCkjmJ3Ix76e4rSQoIktKZdKm1DU0vy801twahz7QnUafb0eXrixECRqmQJCW1p1Bxsgj1yNqJxZbc2K3IjqC2nBqSoUNu0FN4tzzBRlxSeuOh/SFLvCUuRY7kLRNS5ocXjHUJPmK2OEWuDEpu+R1cJAqsVK6CmJNocUnOlWCPKtPqVWcls/MUvYw96FK8ZFuknP90rt6UGsurCQeyE/spv4ntq2LNNXyyAGFEZHpSxbG8uAJ6aQDmpLiIWPmRpIiZVkCtoDWh8ahinNXDjhaBUpsZAPiUKDSrQ7HmIbaw6o74RvVeroJULfEU2RH48jtx3lIQvQlwZ8JG38K6pxcBI4YkluPHeXoGk4+GdqQb1ZpqeKIcp9o8iQ6hBI307966PMgxg1qbUEnuEq6/LNa+0uDHVNnNYFlStSV/ULJVnOQnBp1grvLLKGY1tQ02kbAnpVhVwaZUltlDkl3olttOT86sJZvMpBXLcbgsH7qfE5j9gpm4DaYw3e5Cgl6QyyD2T1o3FZMZgJWtTh8zQBqyBV5husqfUy0FLddWskuq6AfDvTG7kDHkdxUstRKz6w4pKO3WveX5VG4PET8q9DqgMbUIRztHE82WgtuzPYMAKw4nSSOmKpxrywHZUaMnWUkFSisq1Cm648KXK4LRz4MV1IHR1Q8P7ar2r6N3I8p2Q4hhpTgxhpZI/ZXHjpsk07i0zqxyaaC5aFNibb1XNTS2FLaV73LycKPmaLtW9uNlERrAO6dazkimuLwO8zj7RlI76RW44KkqIC7hhKScYRv8ADrQy0epl1H7lrVaWDtMVXYwVbHOZn2hKSEJCj17Yqrw/AksxEPXJpPP1ZyDnH86dXOBuattTtwe8B2CEhOaINcKRgEh2Q8vT6/yqL4fqdu2lyVLX4e0xUbjSHnSthKUpByCax+JMlP5WpJUdlqT3p3ascVhOAteD2Kqjbs9uj6ikHJ65cP8AGrXwvKlToV+IRu0hQj2WQ8kxG3QlnO571Wn2aTEIQxgsq6kD9tPzTFvaPhLYPpvXkhy3Mj7YIx6ppv4b6K3AfiEt10ctm25tzwOKcKh3SrGKjFvUllUdAUtvZSe5Squlm52Rv7zIPwAqBziSztbBxkH/ABJFMw6Lx9zsLLrpZY1tE6zsSI8ttbrSykKwcp7Uz3eyx3EibEZb5+NiE7kVs5xXaClQVJZG2+FZqieLrJHYKRORscjAzitSil0Y7NOILnc7NaTMclIKUlIOGhtmh3CF8ncSPTUOT3UhgIwGwlPvavT0pV4+44iXSC5aYbpdUtaCFDPY/DFDeBp0rh6TLUot4loQjxE7FJJB8vvGjUXsFtrf2dZm2GG8gquL77jY6859Wk/LOKTG4aWX3lN91EJ+GagvPEc6Y0pp8o0JOoaR0/OmN+2SUBThZIHUEd6z5E6NMGky1bL9w7L+yjrjLdQAFJJAIPfrTHFTHU1zEIQgdOgH41wm/wAKLd5Qftojsvk5JQ8E6j5kKwKntK+NoafZUoTJjEaSlUtspI/zVqjHgzOXJ0u88URxL+rLTbVXGTjVrICWk74GSdzv5Cr8Dh6Q82iReXWtRGTHht6EpB7Z6mhnBcRuC5Il3AttyXsEJ5oUEDHQY2FNRvUJGwkIV28O9FGvcjs0jMNsI5UCGhlvurTjP7zVhuCFL1vqLh8j0/CpYspEpBUjOxxuKnCgAdt6JJFWyB7CE7JxnYYqFCtZWDvgDrXklajsTjBCgK0bVjOe9C3yFXBCvqfjUdbFWUqFQ6sULLQQXxPER1I+ZFRf0riHopsfFYrmA+i28qUDJvhPwSr+NE4/0YvEBK7mVH/D/OqeWfSZSx4+6G9/jaCjIEqPq8uZvQx76QY4JAkIBHbBped+iJUdYfTcNZB6acVegfRlFfb5j050KychOn+FVKWS6YSWOrJJfHrqEakLG42wmqKePpRB1OKz5hIFeXrg+PCCUCQtaenahrdhhhB1FZx60p5ZL3GqMX0XnONJToI5rv8AmoDdeM5ydkKX6krNExaYjadSUk/E1SXwuzerzDt6HPZw8FkrIz7oztVQm5SopxSVguNx1coqwtAQrG/iNTXniy53xppToShIHRsU0L+hpvGPrde//LFD7rw2OHHhDLgeRy9SXCME03KnFAwakxVMiQWSckGp7S9rmtGQMt58WauTW06E6R2oe0NLgA86Tusckg5xbPtqIHLiONNOEe8cCkXncw4TPCv8CQf3U8tcV2zh5pLE61qkvKJUlaUpO3zrFfSlCbBLNi0nsDoH7BWjHFpcIx5eZcs5imHOVK1Nx5J8WygyrJ/AUSmKuDDaPavbGkLyAXwpAVjqBnrTkr6XJgJ5NnZA7Zf/AIJpe4o4wmcUR2UT4EdpthZUhTal5yRjua0XJ9oVtiveynFlSywlhADjTiw2FKSTjpsDnbqK7bK/pHAS4uA+zcI6SctEAKQn59fxrhdglyEXCJbtX9XkTWFKQUg7hYAIPbqa+j7nEQ3FdebcUhSUlWx2OBSM0aHYnZxVrhu4F0J0rQkq98EEUWjcP3BpwIW6vA7hANM0bmKwrBVkYGBjAqxOuqYMYlUeQ+tCSoojtlZCR3URsPmaBTkwnFFKFwyt/SmXKkhB/QVp/ZTbbuHIUFptLepTYHdWaF8OXT64tqJrEd1pp3IHNAyQD1GOxo/FUtvCFEYP3fKjtkpBVltDTYS2AlPb1rVStaDpOCDUKnA0nR1xWkZzIcOcjVii3exVGK8S8nqEYzUSTU6cKJJ8jVIK3I9aEs8J2JqsVb1KpXiNVVK8RqmWIY+lK4Qp2ibbQWgSFctw5opF+lKC+9lSHWQTtqTSNEaTeX3EY0K6gnvRSLDRBWGZkNLiB95IrIs8V6ZcM6eXSr6o8j6jjSLNVoE0b9BkVui4uNZUw9qSrc77Vz+6Q7TPZKomWXU9ADjFV+GLpKjyVw5LnMQPdJptt82Yp40uEjrLzKZkPV1OO9K62C26tBPQ0bsEkrSULUDtVa/hiK4HHDpBPWpkjujaAxunQK5Z0n40H4gVNiv2+Ra3NEtL2lsnpkjG/wAjTFGejPJ8KwRQ3iNLrLcN5tsENvhYHnSItp2OfPAV+p+PZACneIo7QV2aj9PzoXfbVcbels3S4Kmuuf3ihj5VK79IM4ZS3b0bfpL/AJVrNuMy9R2Xn2sEDICRtTp5d6oXHG48gN9jWMDyodJj8mYE9jimWPbpL7yEoYWcnHSrE7hqW/dUoLfKRtk9aTbsaqoCTuF/rNqPIOSrSQn+NQN/R+2s5WpRPc11VmxststNhKyG06euM+tWEWhoDHL28yo1tjdGWVWcwY4Ah/eyo/GrZ4Gh7ZQNumK6X9XtAD7JJx55qRuEOoabT66aMHg41P4PbtV5tFzQD7MzKSX9jhIByFbeoroou8e7NLZiB50LBGoNK0/5iMU0ojBOKVOL+InmXBZ7KS9cXdlFB3aB8vX9lSXXJS74BE282u0Oqjrc1LbGF6d8H9H41WgWm5cRPide0yINpO7EBvIW8Oxd9PSi3D3Bce0hNwvBTJnndDZ91v8AifWmCHGkyZPN1lI8/KhTb4Cpdm8KKgtpEdGhCAEpGMBI9KuCPo21Aqq2zFQy3gZPqarSyEvNHqk/lRtbUCnb4BriitxtOdzqBqZo6I+jvqqugJcdWke8CSKlezoCsbZBNKT9xjJUObn51T1bn41uhWEHFVkq6/GoUeuK+0qo8rDigPOp3leIVXcOVmqZYrRrbFZgJeaaCXB3FRCQ4oEqwTjyrKyvMW222d/GA4sdp2S6pSd89qHaA1dPBtvXtZXX07dsz6lId7O84h1vSrrRbjBpD1mUXBkhOaysroQ+lnHf1o5db5DrL6UtuKA19M109aEyY8BDoyCTn8KysrPI0oEyoEcLcwijtqeKLeylKEYAx0ryspcOy30XhNeBISQMdMCrzBUcOKWoqI6msrKauxbDLCdQGSatpQnyrysrfjRjn2SaU+Ve6R5VlZThQt8fXORZ+GZMuCUpfylAWRnTk4yPWqP0e2qJFsUa5IQVzZjYW684cq33wPIf7NZWUqa9Q2P0haLmXJWp8lWlWkDsBRlKEtjShIArKyhxdEyd0aPnS0cUFkLUrTnsc1lZQ5ew8RWjJCZzuP0iKne/snB5GvKykx6GPsrpPgNVGid/ia9rKJlGj58afhUCicmvayhRZ//Z",
  title = "Deluxe Dinner Buffet",
  description = "A premium selection of gourmet dishes for any occasion",
  minGuests = 10,
  maxGuests = 1500,
  pricePerPlate = 249,
  currency = "AED",
  isBestseller = true,
  isVegetarian = false,
  rating = 4.5,
  reviewCount = 28
}) => {

  const navigate= useNavigate()
  return (
    <div onClick={()=>navigate("/product")} className="cursor-pointer w-full sm:max-w-[320px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Product Image with Badges */}
      <div className="relative h-64 w-full overflow-hidden group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Badges Container */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isBestseller && (
            <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Bestseller
            </span>
          )}
          {isVegetarian && (
            <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Vegetarian
            </span>
          )}
        </div>
        
        {/* Rating Badge */}
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold">{rating}</span>
          <span className="text-xs text-gray-500">({reviewCount})</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Title & Description */}
        <h3 className="text-xl font-semibold text-gray-900 mb-1 line-clamp-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Package Details */}
        <div className="flex flex-col gap-2 text-gray-700 mb-3">
          <div className="flex items-center gap-2 text-sm">
            <UsersIcon className="w-4 h-4" />
            <span>Serves {minGuests}-{maxGuests} guests</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ClockIcon className="w-4 h-4" />
            <span>48h advance booking</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div>
            <p className="text-2xl font-bold text-green-700">
              {currency} {pricePerPlate}
              <span className="text-sm font-normal text-gray-500"> / plate</span>
            </p>
            <p className="text-xs text-gray-400">VAT included</p>
          </div>
          <button 
            className="bg-[#BD9455] hover:bg-green-700 text-white px-4 py-2 text-sm font-semibold rounded-lg transition-all active:scale-95"
            aria-label={`Order ${title}`}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Icons (you would import these from your icon library)
const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const UsersIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default ProductCard;