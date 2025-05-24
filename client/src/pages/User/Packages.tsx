import React from 'react';
import {
  Search,
  Menu,
  User,
  ArrowRightCircle,
  MapPin,
  Star,
  Home,
  Package,
  Armchair,
  Utensils,
  ShoppingCart
} from 'lucide-react';


const FoodPackagesScreen = () => {
    const img = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAzQMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xAA+EAACAQMDAQYDBwMDAwMFAAABAgMEBREAEiExBhMiQVFhFHGBFSMykaHB8AdCsSQz0VJi4RaC8SVDY3KS/8QAGwEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGAAf/xAA1EQACAgEDAgUCBQMFAAMBAAABAgADEQQSITFBBRMiUWFx8IGRocHRFDKxI0JS4fEGFmIV/9oADAMBAAIRAxEAPwC7VEmHIIGxfL6D9n1zbKcZnd1ABvv79pDb90jquD4hgeLHJ5yfkMarUPVL34UQgyIFUBwJFCo8eOMcAfLz/L302wGMZ/iKgkEnHHvLdFGtREYQadiMgq3mD1PseTqyeoY4gLiVbdzOIYayhnKzTNPGTlDMCAF9A3OTqm1kPuPmS703L6Rg98fxLdAGimmp9gSAt3qFjuznr8uRolQOSpHH5wNxDKHzz09v/YD/AKmw95YIXQ/7c27aOmMHOiPjgwmgJ3sPiZjC2/kaGeJvUtu5l6DLDgaH5ZY8TSqfiTFWUcjUPU6jJh8gyETKd645XodEQLsw0W8/LFe4kYqGEgUHnPUeWh7O8GdRk7D0jlQvU29IZZ4pEgqUDqSOhPUfuPUaW8R0eQLV7zl671LtTnlSR9RDkdapHhb89YDVEQ23M6+NQnqCdV8oz22cmpHXIxq3lmexFntXXwKkUMk4UytjGf7db3g+j8231dBEPEdT5FXH9x4iJfihu7SwoVjlVSoIIGQMYGfkNdHqNjNlDkTM8Pa1fTYMH5ntFVCNArMR6+mgoQDNU2EwhDZa6/ufsmmMqR47yXgRqfcnz/mNMdekUttRf7jzDNp/p+8U8dVWXGgVY2BwHdhnOByFx+LGoUhHDMeBEbm8xCiKcmOP/pmrkjcQVVJUVAQMkCvtJz0POnjrl6quRMj+iI4ZsTN7nFUx3FobimyoVj3kZUrjHOOvPXrn0OsrdvO4zX2BAFHSWEcxRl3ICHjdvG7559f8+2hFc8S4I6y32ePcXajeMnb3qlcnbkft1/xpYkq3MKRlDia73Xn+2dS3WJrEcXGCp76IEhGlMIc87mw2QPlu0Ap6fr9/vOrquy306fOOv+J3bZMz4/DuPOfQ8j8gNLI218GNahfRn74hGYiKaJ2EUMbr3czLk7eQeB1HOD6cadzgjt8xRfUpUZJHI++/t8TrvXpq5BKqleAGb8uvz9dUYslmTPbBZX6ZfX/ZZVgHdjhgpyM4yOMYI59dEHA6ff38xQ8sDunFJWJF+N1GCQNnlqK7FU5MvZSW6CL/AG6rjJQqUKsivkgNng5BH6/41Uvvs25jeir8nLETOB4H8JyuinkRwehvT0hZisdOvd43Ec6M5FaDHWa+cLkSpDWPJIYtpdwcFV6j5+2gupK5J4mLf4/RpGK39Z7NbayBHqZeOMkKBwPLPmdVW6piEE5L/wCw3m5rU6EyvHLujIAU+489Ef2nX6PUm6kMV5M1e5U0d57HS1VAiJVOhcNnncDlQfkwCn0HOtUottW0jjE4Ji1F5KnoT+PMzOg7R3WalD/CRgepYgn6Y1hXaChWxuM3dPqrrU3bYZ7Pw3e+xmZZUg58Kk5zpe5aaX8sDJjNTu1fmPwJWvlwutjmemqoGkfHhMfQ6vTpabjkHGIK+96lDYyDPezVkuVbUfbN2t7Tpxjoe7X5aPc6hPLoPA6/MBWjE77hyenxGPthbbb2gp6dKGnMdSCMOgGfc8eQ0CvUqlnoH1+YTyWZCHP0iL2TsQut4rfjGcWq3FjUSLwZMHCoPQsR9AD7a3URSoYzJs1NuTWOTnE0ermWFKanm7mjpekNKlQEwBzhFUE5Iwdx6jPOgvYz8DpLJWq8nr7yykq09UtQKaoeUoULM6NgA4A35ztGeQvPXroYMuygicd3DJKaameF6xkLinZnPcvjliSQecE58uNe6GT1GJX+zZLwXpL0kECh2ENYjfeICAVyDzgnyyevGio2TtPSBYMvq7xErLZUWa41NDVxhZEYglxlTznK+oOf18z08wboRJUjqJ3G8tPKjttd+CVDZLH3z5eufbppS1STmMIQRNnoaiOeBZldDHIoZCDwQRn99DY8xXGOJkNBUVbyU8ewRPswrKBsXJ5+pwOfPGrMAAdsaq/rE2ZO1eg4zx9e2e/+Yehy1Ah3KaiJQQR1YFf8jGk22t0GMTqKldCFY5H8fz7y8atauGSLcFVgdofqwzwc++vCwtx2lRV5RDYndRUmtpe8nMaVIwpCk8bcdfYj99XuYWJ6jzIrr8l8KMqf3/iepXxCNTOFkxwvAXONLi4DqMzx05LYTiVaq+UUhSMI0cn4FRFUlvYef00Xc1n9qyRpjTlmPHWL3adzBIaOrWaCq6d08Zy/08/potendW6Sf67TisneMRVcTU7LHURSQueiyqVz+mnSkTq1qsBtMthpcACSNh6g5A0NkAmqltrcAiQ26eamnaaFtsyMfvGGQx9tWsUMAD0nC+IaPU6jUtxuyY30M1Be6eakub9xMy43DnDevuNZbo+nfevMy3ou8Pu22r/5LXZ7snS0dwk+NkhuEIQ7IlLAEY6ngYPtqt3iZIBRcfWauo8c3BU02QO+f+o62SGjobKsVKW7kuysznk54wfbyz8jpzQ+IFCC/Qnn8ekYvqfVIrbcNjp9+8RxRw0VwuVvlCwxDlMgZwxyMfnj6HXvEKil+fxj2huD6Ybe3EJdmbnYqWT4Snn2tCMMkjDOfXPnrO1CWeYLmUkGMAll8tTzBfaiq+2LlTx0MXfJBITNLjKoOOCfy0xoaWO4ngt0EHdate0HkDrDtrvlZG0FpeieFJidsp6MBzwfloNheihgrdOv1l8V2WeYevaPFvgtNtt79zEgmdTvk25Jz76dpaiqnJ5bEy7Bfbb8RZFmoILN3VDF3fx9ezuqsBucIcHkH0z09dN6WxrNLz74/CUvQV6njjj9ZWkhaNYKeuomqKR4iZJO+XIdf7ArHp1HAzxx0zq4bnEnBJkcU1J8SaeOF46mnB2iGEurqRyNrYJwNpOeM69jvPHjiTtVRvFJVTNTRzMg2VKI8EhXGMk7TwT7+mvAk9p7gZEoymWSRZaawU8ErN93LPUCSoznGRjO5QM45OPIasRkSq8Ekzr+p9MKuhobjTUcUlTPC8Erd5zEVxyCDyRlhx1xoupfDqxOBB6Svcjoo57TNoqqOSPwAqNuPEmD8wP29fLz1V0yOklHwZrHZqtEtjo2d2Dd3tPTqOOPbjjSLgiSRyZFZ/6fRIc1tweTLA7Yk2ZwOOp99ODSDOSY43iJxgL+f/UbLb2TstKg/wBN37DHM7FskcdOmiLpKR2zF7PE9U3G7H04hJuz9leMI1qogAMDbAox8iBoh01J6qPygV12qU5FjfmYm9quyElso6qt7PR98WjO+kc7uM5yhPmMdDpO3Qj/AGdJr6XxsthbxyO44mQSVl5uBZI4GhjJ/v4P5aGunor68mNWeKXtyi7R89YV7JW4xdo6WouD+CDMoL/hLj8Ofrz9NGBA7YmRrdRdYhy2Zq15X7dpUqrdUww3CAHujIoIOeu08kH3Goezdlc8zADhThhEK+2nttHSSNdKalvNIzcxK26RSehU7RjB9zq6qrDrgxnzU3ZrGJYtP9I7jNSpJX1wppXXPdoobZ7E551coT2jw8WtXhBK90/ppe7RSlqWeKujjJYIq7H+nqdBcnIBjuj8bWsbXEQbfXUgurrdI6mJB4MoSro/vollTiv0YzA3a2nVW4tGVmqdlrRbavvN9ZVSU7LjDPgn2OMaw9wa3Djbj2Ea/o9Pp691VYJ9zzBna2ats1ZT22xqaiGrcRRwljkOegHtq+j0yamxtx5Hf3/7hNVq7KalsK9eI72ns3EK6ke70tHUXAwd0Kh0LqGHJUA4DHnqfMH110gpUIFbnHvOdNzFyy8Z9o3fZRVNveZHTBij2/lt1O0Su8g5lRLLRQQvTxUlPAXYtmGPYrN58DoTpLVaJLVJAwYevVOp5MW+1U0dqsEzqMPCd6N57gNc6afUK8dTz9/E1qH3N5nbEqdmvtTtVZDVwutMrf7ferkMB+uPfT6aFmzUW6S9mqqqYMontus/aKip7jbbhVxrLM6z0VVTtnDDhkwRwSvTWjUionkjr2iWouFri0DjvAq0VHNG8xWpbuZFj7qpaOR25/sAPOW/6jxgEart546zxJ79JNLGZKZay10NPTTyB4olnpyVkBJwgj6Rk8HPTnPmdWPEgDIxOI7VcGqofi6mpljg2KwEyhXfkkAnKnkAEEj214Y7SOZzcYamKqk+EZhcEwY2ERc4Y4YoxO0c/wBq9f8AEAbuO8luJ92yqHpYbfaYqCCvno0LzRzuc9/IQQABwWwCT5DOTq+oHpVM4ltGDhrQOvzEO6yW+ZYqelT4CvhX741EhCE55Axu3Zz8uOdDqNgbJOVhra0YEAYf7/OMnZG4xwWgQPKoEcjKvjDAj29tUtGTxFSCDzNZjlGcHGtGB24lyGQL0IOpBxKkEywKkY6jXsymyRzVKmPbnk/3aozQiV85madtbNT225x3GN40iqT96kjhF348iSOuNK2V7TkR2p9w5inV3uC53Wksdqw7VMiJLKjBlQf3YYdcDPTjRVqOMnpFb9QqgkQl2cmvFbea2OzUBlp6dsRr3gSOMfhALHqxxn6nVXqY+od+Pw95nvt7xptVD2ir66OSsmq7fSQH7yjWSMtK+cgk5OF/nTQ6qyqndzBrgcGObmsFOslM4Z9ozDLgEe2emdFJbHEq3/5MAXm93alppVS1yyTniAYJUt5DOkrHtJAAx8z1eS3rPEXf6gdiqPtBE9VRbKa9xp3m0HHe+x9s8AjTFd2w4PT75l0faYs9hae/1sxjgpWgKHa5l4yenA89Iauusvis5J6YnVabVf6W6xcCM1ooLjB/USCG6UykRU8s8EqjILhcD5EbjpvwqlELdiOoPzEfFNV5laqo4mofZ0UtPRgkgwMsiMPUfw6188zGA4l8HbwdVl5WuS7qOUrw6qSp9/LVl6yrcCZn20sd17SV1ypkqkprdTMDkctI2MkfLnWHeErvexece/QfT3M2tMQKUBOC3tLtnvggpxTwukCRAIMYwAOgGs6m9kGd2M8xyzTIx6Zi7237TVMcEqQTO9SSDCIuWGCDu4+X56NohbfqA+eB3nrRTRSQR1lmx32336lLVEsltukoBctujR5B0fH9rdecYPnrWdwDttG0+/Y/xEFp3DdR6l9v9w/Dv+EuXO23HbCsFJK6YdZquGV52kXHGFUnk9M4GOMdNeFbHtmDNqhjnj6yGCO/yWqRDDLDuODSzwBIih5JDPgIRk9SfqeBPlP0xJ8yv3gir7UWns13z2ySKsuG7wxxbpKejbGOGbr64X6nRFQKR79pXDWjnhR+cgtfZ1Kysp7pcbnUfE1JLywqxBkJA/F0xkDnHy6DWDqPFWVmVUzjvNRNOwGV6fpGWGxUtuhMVPVCnXJJ8MTZJ65JB/LSA8W1BOMCVCFucfpBdV2Xt9cymor5XZBgGMKvHvtX20T/APqXg52QppJjoZtvU4118yQJEKpjLjJ8K5Hvn+H89UI5hNoxJ/jWjXLNgag5EgICZ9HWPsNRKypF5FuS3yGkrtUK+WOIcUgnavWCL5LbL3b3pKlplEqsjsMHAIxn20mniyg5xDN4faQQen33mejs1L2XeC4UEyVCKC2/b4wOQQR8vTWnX4lp9RX5RO1iOPbOZlanwu9SxUbgO3f/ALjN2Ouy0llkjhwkkszyuVHmW4/QAfTQddeanFfsBMy1Tjd7wue0R2zmo3AOSWZT1HHTSwvbbzBMxzxDlNdYzCCpBXHQH5auuoHaVBI6ys9+SJ2l7zwEDcuM4/46eehG1ls4ll5PM+uK0t9WPuJiknd97T1SD8DdPqPIjVy6ucGEHEXrTdprRdZKW6MI6o5LMFwGPTP8/fSJRqbN69J0mnZL9OEHWW7Z2nirO1rRblaZacsh/wDcMj8tPeGrabGuc9eIPxFa66Ai9czRKCrVogB0z09Nb3XkTEU8S0Zoj0cE+g66jBlsiUbjWxwxEE7jjIXzY+mp6Sp54iJDeoau63Ki+KRQkpDuMckDn9dc3qqi2odSeDN+pgunR+4gC7WN6W4zSb55WljLx0iTGNEXjxSSepznaDn189N16emmoeYMntFzqrrGzWcT2w0nc0K1Qlq3glZJMR92NiHgiQjkn0BJPA1fznC7BgfSVKqW3NyfmEJ7bvmnBE8EUTAL3rZR+PCnhyGfIBPXII1XdYRgnj55llKqcjrAUslVXRypaZZbfdIfDJBtZqZ39AxGUPHTp+eirVQ+CBtJ9jjMu2r1CjkhgO5GYkVdyvs8ksd3eYLC5WVXTCLgchgOfropqrQ46n68zy22uu7gD4AA/HHMkoY4GMFRTVStLI6haUIVHPG7HXGl7GdQVI494woV8MDye37zR6yjX4L4wzRrITlCXxnz1mLQgoJ7xzz2Nu0dJamuaxwr9/SxA9d468c6x1oLE8Ey7Kuef8z5LrTgESXGMkHyAH76saW/4H85G0ewhIzO3VSdd1iYwkcs0sbpJj8OcjHl/BqrAjmEUggiV664rL3dOsioZuAzcAAD+DSuqt2VEgxnTVf6nTMrM7wRd0lQgXrt3gjXLDfzz1myFVjuKypFVlp27qHJCHvPQADOc6YqoZ/7RL27EGGaQfFCrC0sUcs80YBKwIXwufPGcfXRv6axVDOplEvo3ko65+oi9e3qUqGMZmpZVjIUBcH1/wCdOUspADc4nPeK0bbt3UGeWw1f2YgnmeplyS4Hofy1axkdyFGBMBwAYVpbhLAAJg6iTg8Ej2OgOoXgHmCKZPWXbXT1TUMsioxkLExq7chc68cBQ0hmBbE9pJb3GqpS0U4gp5MsNmCQDyFHn9NeFIJ3EwmVxBva+tN/aOSgbZU0hIlOMsqkZ2/PjjPTGj6cEMwsHB6fJjukLp0Mr2mkNnrae4iriliVtrmYFZmLqccHGR+Hn308hH0+IxaC/XmajarzTzKGinG9hnBOmUfPSKNXiX5LhIV8LqB5kEaOCYBgBFS+9rKSikaKOoSerIxjcCI/20Ky1V4JgzYq9TMv7BwVNV237yt7wRx95WTRM3hfb4gCemCcc9NeK1sN5GYzXaSAqNwZqS00gjc3OX4h2eWZZJyJI3cr4sKudoGSMny8udZNjZO8nBP4zR3JUMGWzJStBF3tZGVpSrNUU8RbvQRj7wDjbgke3B1DMvGfzlwG7S1Kaau21Wx5o8qYxT1Y2qoXcGRcjB/PrqSUbp1+vaewy8ftKVZBSSxCCb4KQMv3feVTZwCGK5XGSSfXUr6e89145ib/AFAtsVWsdztZqopN/wAHWZiZTjbuBdDz+Hgnr005u8xQx7SlY2sUHfmLWIofs+ptlHNFIuFyJd7yJn5kAH6aWwXDLYRg/eY7xhWQH/qOT3ugq46d1aHfsUyKzhcMfIqfPWO9dwTYc8dDHK3rDbswTWtTzSGYfDE+PIAyefr6DVqw6jbz2lXdSc5n1RdoY9qBKUqOmU9gP215NOTycyhuE0H4ig6kSR+niB11m0YmNvaUq29WyCM95WRKAD+PwnQywWEQMeYr080NVUTV8cm6mLbICBlWIPi/b9dYniLbhtnQ+GoxBYQiyGoPc4UAj8R8hjWRShdwoj5YVjfFm+VUla8tkofCZJkhlKDgDClmPsQNdHVtor81+gnPakvqLPJQ8n9B/wCRwstGlipBT2yYLgfeEcbz6nWBqNde9vmb/wAv8R6rS0ogTZgffMCdpomrS0uRvRdxyMY/LRNNac5MNqtMllArPvxFW23eOlqzFLwz58J4DfLWlZQzLuWclqNMythusI/b1LSurbkYK+ZI2I6Hr+uqf0zWDpzEPLOcRihu8JgNRBKMINy7cH89AIKekjmR5ZzCEnaYUfdfcyMrqHBTjYcjjnXlzg7T0hlqzzmBLqlDfO0EVQ1RJSfEukRaAB+9KgkeH09T7fkzprTk+b2yfpnEaoqbIVY2UnZx65pZa+bvZpYxHIUG0FR0GP214WXWk7OBNXbVX/eMmLt97LfZmZLbLLTSIPCUY4+o1T+otof1HIhjpKrk9IxEFrzdXmkpa+rqGdD4wGIGPYZ1p7i6hlPBnMaqtqmKkzkTbSzQqfPfv8GPmemhlfeINXu6xi7FVDi9xCCWI1VRE8MYZCc5GcDPyGDzq1fmkGtOh/SEqZkbakI3u51VJc6SOeT4WSWNZHM77xUOeF6YIXjz/TR/DtPSwLvyfmPaoPW2VOT7wh2WvlwuaNTPVJG8c+yRO9QAt+JfC3GOCDjqcH5i19CV2+nvziN6K5rK/UIy3H4UDJEUUhTbFPcfEGTJV12rgYHGDxwfTSZwB0/c/wAYja5z9ieUkiozUsEFLSQhmjcOcxiTGe9RMZUZIweAc6jJB57/AHmeIGPv8oF7XzQUfZGdq55o6h6uMCqxn4mVIyQ+ORtI2j/404m41YHTMqmPOBzjAifFarjbqGrqYqiKFo1V5p2kBhxjICqed3J9hoBsRmGOccfPMeKMikk8nn4/KLU1FPUTLKplmMzF+7cM4644xyfXOnE6c8TPtKg5HJ9oYt39P7nXq0lPLHSq34lcc/kCTq4ZSOuYszsG6YjNb/6To9ODV3eYv/8AiiGB9T11GBPC1hAP2tWMoKV8TBhuAwWJHnjHXHyGqb2xzPLqVI5WUKlUuGYpqyRHY4Dd1wfYHP10IsR6sZk/1Ln+0cRhpmajtcKRruposAOuMD6/zrrMvXex3Te8N1nmuK6sZx+H49z+koXu/S0tCWg8VTUNshHUgeZ/LjRNHpPXuPQRvxTV+XX5VfLGE+z1rnpp/tS5LuuFZneegRfQfppPX6nzB5Vf9g6fJltHpQoaxzlz1+PiMFZUJDSSuzBCse5cdT7D1OktLp2ub6QljisZgeiSa/1H/wBOZ4KeLAqJqkggjnhR64/LWw1NdShe/wBf1+kzxfY75PT6fpPqTsJRXy5HazNDExViSQXx558h/wAaXfxF6BtTknpM7xHUIbPLrHPc+3xHqm/p3Y6eB4zSoQ3LYQZP166G39S2Gdzke0zfKz1MEXP+l9A8ataZZKRwc4QcH5r0OvDVaheW9f16/wAyjUsOhzEW+Cu7LSbbhbQ8MbgipiHDexznaf8AOdN6by9TkI2D7H75lFxnB4Muf08mW7XKouksKd8hKq4GNu45wB8vP56vrAKVWlenX9pteHVghn/CadBWNEvGgVWsgxHHpDGCrzOJUbdjQ7iXjFSBRMW7ZOKe97om2l4hkj5nWp4epann3mF4qoNo+kqUE7VT90jQoBy0k0gAHvz102UI5mQdOXPWE6OWnSle4LPI1zhlSSKVG4TB8IC46ca0a6ESrPeBHpcIBxGCrvy3igqJatY3nm+8bxYdXLHMYXB2gDoRpisIq4xx+uZWzcxznn9ILtdwFvsMkNOqGCojZ6iSSo5Dj8I2jr5c/wDGqeXWw5UH5MJ5lgJw2D7TQuzsrijoauKtCSXBAs9OpCJEACWQlskOepPn6DrrnrlFbEIeJvVsWUFhCcEQInkr0ZviYWV1kOWWIk+GZj/YAeOecn11WpGY7RPOwX1GJl6uDXatjpLJTu9NRJilOcJKjH712J6A5G3PkB640Z08w+SnT94Skmgea/B/aXOz/ZRjO1NWVUlZPnvPhyMrAP7d3v7tz6L56OKqquSPVFbNRbccA+n5lbtP2alVFqaSGSWoUFlnlJVUPGML+egm0k89JcVADiHexNf/AKlAT4Z49w9iOCP56ajTtyVMHeuAGEfFdoMr4gDyAumooZ+bIryk1GYamQhhIPGF4lXzyB55xz8/XQ2THQSBTk5E9jrYkJQYkMkP4vMMCCPyI51Qpx0hK62R8ocH3hCivdQ8bSLD3xVMMgP4x7D8+fTQGoXIXOIZrzvzYMEdCOOf+/vqZc7HWyS83BbrVvtiiJEUZTAB6cDP8xoHieo8ivyl6za8NpyDqn57D49z+wjyAZVWFmHgJAGRwP8Aqz5axF3WYVZrllTL+/MzrtdcZLtcFo6CXvI4JOXQ9W8gD/Ouum8N0Ior3WfYnNeJa3zXCV/ZjwYGtVighgnLTSskZlKYbe5AZvfHX6awbSt2oL5yOv4ffE0bbDpNKSRyB+s0Xsvaordbk25yVGfoPTUaRTYDdZ3zOdpBVfkye43NIXaGDxSD8RB/CdA1mt2elRzHqac8mUI7hUqQXk388gjWYutuByTn6xk0oekluFFSX+heKaNSSuDuH6afru8/DVnDCZ2o02JnFktP/pi6V1tBJiL95Fu4O04yPof20/dqTeEduD0P4R/wmzKsh6gxlNUABk6IvSahgO918cUTs7hVAySTjA1Ujcdo6yc7V3HpMonukM16erqE3QupQEHkD1HHB102jpFCBWnK6y1rnLLPGuUM1pahMMcs7HwyBfFnPU+vGmiwbiCBCr0naxw05pfgzLLU7QSv4gOvBHTV+EI29Yv/AHg7oUqqOot1yp7lLVKgBUs9MW3qSMhcg8Z6fXRLEJbJg62wm0CdUlztbXeonayvWx5EzHvgrKwxnpgHny0J1DZA6QqsVwWjxbe3tFcopoobasUBY949ZOzqGPJAQEf5GgVaGp+kNZrLEEoVsl17Xx1ArKqKlsqyg/6ZBGJSpx4hzk8Eck9OAcarZX5bFQcKJdLC4DYJaNtjt1IkaU8LfCxKuQTxK2PMA/h69ck/LoERqK+lZwP1MdNVjndZyf0Emmun2C4iSipkoJRkupAdyTj8OMsx9c4Ghi1yJc1IDIbh2hgmRxS0lS8rKcRlAAvHOW6DQlIJJhSpxiInZ64SLe5Y0aJ4yTPGIW3KvPIB89Xb0EOPoYIjcCpm1QYqaWGZDkOgOfXT+Cekz5h8lDbHjDTW6JjJkoYlIY885A6Y9NDwwm+wpJ/tg2S1WpHWR6WWLByZEc5Pvg4/LUksFlf6bTueBLtD2Uhb/VW+vdASGKyJhm8s4B46nr66EzEr6hKv4bUx4OJfhpqrsvQyhYnlTYSqp4mdgc5wM9SRn0APXS+opOpcbo5S66Ok4OQOfxMV2uVZdaZ4qkzRmWTve9hfAXA4BHmP8afo0AqIKjiYmp8Ta5drRo7EWiM1vxMoT4ejAbJ58Z6fudR4pcKqPLHf/Ejwmk22ece3T6/9fvC/a64R0dRQwEkyCRJXG7jZvwT7cHOsOvTZQnHYzV8QcNp2SanZ6gVFBGc9Bgj0I0jpmBp2+0xKDlRFR1nWolBBVjISfz1kW43HM1QeJfpw5GHX6jQCV6EScwjQB4ahT/awwdX07tVYDB2epYvf1KpZFpUudHj4umBKDyf1B+et9QnmAN/a3X+ZmmxtPaHWZ/bO11ReyKahtkhqMZbLju1+v/jT1uhNH97jH6zbp13m8BDmHJOw1ReKTfeK2VQ/Ijj8IHv5/rotBFJyqweo/wBb0s0Q712d+y62ahq5dzIveRMRw6c/iPG3oRre09i3JmYGpral+OkguV2paiip6aCjWMsA06RR8oeOQTz00x5qsuAMxbymVySePmSxUrRQitt1HDsYd3l2PeDJPjIPAHXV/L4BQfzKmzkqzfxIKmOQpDHVVolpi2JFjVgQ20nGTwemocMB6jxKow6oOZKLuklqWh8ZABSOljQdeeW67vL5Y1PmDb+0ny23fvA9Ok0y1MyVIjePxEMMg+R50JFd9xziFdlTapGZtS29qKnstBSxBqdKHv0YkKplZiCx9wB+vvrE8SLF1TPE1tAAELd4wAU1IkciUtuq+7XAmqHJcv7eA4+mdTXYFAWsS5UscsZJNTXy/pskpYqSkPDLOdzN8h5Dpg9ePLVmrts4JxID11/MK09uorcjZ2syYwx6Z69NXCrX06yhd7OO0zf+oN/jZovseASPTTBy6DAOOCM9OnGB66WZkd9p7wygqMjrHTsVc0qrOkij7tgGQZ/CDzj6dNM0MWTB6jiKWLtc4mTKsjMruRK+38bJkMePM8j+Y0UGa2M8mezJJK6o0gCbcKJFUkN7HHh+mvGeXOOJbpKJHnLsJDgbl7jKkcDzPn56jaCYUWMollWkpKyGOWNu6qFzvllMh244OW5GPTQXr6YhUuzlTK11o6VK6SNoIxMcMNowCPI5HTPvqyX3VHg5lLdFpL1yVxn2nVsuYtlNBbO5/wBRMTICzAIeoXLDPnx++k9XU2ru3ZwvH3+cjSFNFSteMnn8sxbkrzcluENYqtWzsHR3zuUYGUX16eZGn1IRQJn2g22N2jz/AEs7YCanFBVue+hAB3H8S+TDXO6/SnT2+cv9rTM5pfHaaa0EFTIJYyCT56y3oFlgZTNGu4FZfSJO7Csi/PWslaMmHUQTMc8GcSwIo3KQMaT1OlRVyDzLLYTBl6pkqaB42Xcduc6H1rx3EBqRkTMOxdNT2ynroIljeqWrdG3HHGcrk+mMa1LrHuZHPTA/7mj4cymjI6xqrrxDT0jjcCu3xP5kjyGjb+MCMivnJgvs7BBdZ/tmqhSWUrsgDfhjTJII9CSTzogsesbQfrBNWjtvI5k/aqip6uinFLAkVUFbu5AuCvHT5HRtPq2qs9J47wWo0i21+oc9pmFtiipoPgrzVu8GxpDBSzYB6fj6ZPtjjXRKvGHPHX7/AGnNu3/ASK0SWytlamraiRol3JAkvMcYPRz6tnz1KbGPJziVYWKOmM95YgsFRabmI6Gso6pmXG6MNuXdxxjPIzn266qEZJc2LZ+E4oaS2Wu51FNcUE86gnMsYaEnzGc59gcZzqVCVttYdZDs7LuBxHbsr2rW8W77MpokavoQfhYpDxLDxkD1K9ffGs3X1Lb617R7RWNX6X7xr7HvNPWTy1UyVRG3DsmFiJ8lX5Anz1n6e0jIXgfrNG9RxGG59oaK3ExyPukbOEVclj5DRTcBBLUx5itMbhfp2GXgpi3ihLY2HHGSOp9gdBVXu4WGZlr6mVe0Mtg7PUZpK+JKqqZRsoosBvm56IvHQcn38mhVVSPWMmJWXs/SZnW3uprJBIs0tJTY+6gg4CeoxvX0HPOfbXmsOT2+kGBxzJ47hNTcLGDlecLnr/nRQJucEYkkKzVNSu9cgt0RSfoB1z141DSVMv09d4sZVCjFVCggrg8kgevIPz1YCSZfq6aqvIpqZIi/eHdDgEAbRk/LAHtqrnjE8CByZHeTD8HJVfEwF4JVj+G5JcNyQcenXQNuWhTcK19f5xMo7k0V4pphJG5Y7Wjx4FXPC/LH+dXYYXjtEhYHswT14ljtDRGhaG4U/hCOI5VHBHRkf3zk8+o16v1riV1C+WwaCWqQlzp62kd4mkIbMX4lJ64+ueNW2KylGGRFLgrY+ZqfZXt6YEpae7HupJge7kbIjlxxkEj9Nc/qPD7KSbKeV9u4ihFlJ9xNJob1FVRKUmGD0550kupI9JbEKlyNLgdG8TPuz66lKgTuY5h/NGOJUudTHDTO7EBccZ1a3aqkd+0BbYMT863u7S0vaSurLewanklHhIO1yAAf1B10el0ofSItg5H8ymmvekDEYqWG43+2ySXCuit1PsyI1OXf2z5D6aWUU1sdvJHvOiWm2xBvOM+0K9l7wqWunijbE1MO5kK+eOhI9DxoFow2ffmVQYGD1Ev1twiSheWTGFDHB6epOeuoAy20SHO1cmZPWUFaZylX3EbKmRsIw2OSOPPn6Z11TVvnDdpywsQDcPeT3muWtpKIwW5aQjCicJtD7RjHOpsIbBAxIryuQxzO6OiuBr4PgZlaqfIUHwkL5knGPPHB1W6w6ceYxgy9bqRjj947WvsLT1IQ1KCsnyS8jMwXIOCAOmPnjWDf4ruJK8zw83GE4nNR2XhgmhkoFloK6nlMkUkHIVhz8tWp8S3DBMoLHQ+qM9urKKvYxpXC0XthulVHxDUnAG4A/rjkfqW/6eq71IcTRo1jbeRkQsLNCo+JutVHFEvMkjShVb65yf01UaIBsseIw2t49Iiv2p7e1FLT/C9k6GoSPOxax4CpYjyQY8I9zydGJ2+lOBFS4Y5LRNsVFXXC4Oq00lbG64mkY7WhJ9WYjGecnk6RvYBdzHB+e8IMnpCdPYK/DRihWo7s7R3U0Z2DHCncR5emdLb0zktjP6/PeW5Ehs9umqJ4kpH7yZhgArjHHUnywOda+ZrnpkwhOVp4ZIqGRNoJBqML4zn+0+S/lnqdexLquesoQgIBsjzgnPIHAPPn/wCdVzC4EcrLG9DZqytLHvu57qGJXyxLkAvjjAx0zrxBPSK2OpsC/fETJqZTma62aulaUmOUq6qjHP8A2+eMDS9jNWOZckWckQfVW7s/OH+D72hqE4G5s7WHPIONR59g6jIMGdNX1Q4InlFUxXEx2+4QytO2EdTwCoPBz6E/lqmxkO9TxLeaLV2MOe8IXrsxDb4KiSJGpmjjO18YJIXk/LPGjqlg5eUtWsp6OsULXQ3HtFOtOhd1gTqRkRr7DjRrLUoGfeZio9v4TQOxPZi/1EUkVBcHp44ZcNPISYiB5BGAOf00hfTRqGyyAyTQmPV1hyqq+0VsvUNqpaimuAdN7TH7oIc9Mc/wazrdBQo9JI+Iarw2yw5Q4A6yh2sul5o56dbskQogQZghJY8eEEnoCcDPXnUaXSIGOc7x0zDp4Zhld7AVJg+8XC33inWkjpqZAFzvi42AclvbGmaRYLg449/ma+qSlKCjHr0EX+y9Jcru7tPVPDRxtsZwMlz6KPrprWCuk+lckxDR6i2xeTwO8eKHsDa0jedKy4LM/JdXwR81AxpY6guvqxgfEu1WG3AnJ+Yk9orZdVuEds+NlqYzzAu0AucjIYDnPPy6HWn4ctVgNijBEy9e1iYRjkGEazsJdmFJNXvEMHfNBSxAsM+44J9c4HJ51ouSoy0z1xyBKd7orgKOeigIuEAO7ZFjfCfPKHxD5gke+rLqkur9PIgf6ZksBzjEl7B0a0F4gWqmaTvx3YVkx3bLzjJ4xrM8WocacPngdZdWFj7QMTUqFlratFpsK9M698oXAYN5g+Y66yqtOp22L+OIcjHEp3VKZ6maGukkWLvSEAbaBk4CjHToCfnpW/cthKwbKrdoldqLelzVKGOoiVg4wincVweoJ/L30/oLH6mKhjU2Z3brTT26IAB5mXlpJPExOP7c9Oflp6y0njMG1rscmGhVg5TvcrkEjPhPv/PTS6o5ORPMRieJHSPKtQIGWfH3jRuyAnyBGefbIwMnV7ACAGEsl1icAwH2gqpKCqCVNZWI7ZIkhQOHXyyB0I5Gllq8w5UAj57TTpfeuekJ3m5WmemFJ2ajFPHUIe+dc98SP7WYn8PyPOtMczarVjk2HMpWWwXWudYooYo1HMxqKlMfRQSf0GqkiEa1VGT/AIjNF2UsdljSq7QVySyAjZTxkqjHyHXLfnjVRzBHUWP6UHEUKq/xw3GrFWk0UU1QaiIxsG2jIwpHsFAHyyNWLEDBGZ4qazgy+e2tuSEp8B8ZkHbK8p3eeCVAIyM6ExZgRt/WSrAMCGlSkpaDtNU0/wALBLRdwpl+Kddy7gQQJC3G3j+Z0iDZVlfc46+8vc6N6s4g3tR2lgFzt8lDVxSjImqWEY3blbwqTgYH/b5ZOdN6bS4Uu457fv8AEVt1KeYoXp0hftX2m/8AUtTS2+1pNK84AfcFBAPUAgAYwBknoF03faMZzgd5VE2jaOTB1j7H1VPK9Z9sGmjYlAYI8McHGSp6c+uszUa1G9IXMa0+icncxx9IUkuVxstvkht95edXYktNT5AJ686HXdk4xgQ9mjIGQYrU9yulBcZZ7gzzGYblkQ+Y6DA6f/OmyldwBXtFq77NKGVj17xioKW7doRO0wYAxYMTDG5GIHJPJOOnp66A9oRyw7dTGtVUi6LzLGyTyAD/AJ9siSXLsSkFPWQWlpXXuleRw3OwHkeYxkevOrV3uWyDkD4xK016bXWAMDWBwMEnLH6+wnnZG8Q2enW3sQjbmcMTjcCfXBxoOrzc/mqOIwdEdGPJc884Pvz95jGbrTQDvY3UOw5YTbyR/j9NJN7T23Eq2a9WqTtFFJcTGa+VNlIcHpnxDHkTgY9hra8KPl1uTMTxMbmUD5jRN2jioqvYVWWJhiQqOny0PVeKhbNi8jvFq9KcZgrtP2dt9VBBc6FsJu3L3cm2SMnzVhyB7aU4o/16Wwp6iFzvGxhFG+22a5/FVttQwXKhxLHNDnM0ZBG1s/8A3AAef7hrZ0t/9bUd447j+IlZX5LD5hX+lHaeW4RV8dxCmoCq4mAAL+QyAMeQ0ncE0qnHQ9JWwnGYG/qbeqhq+K1UjffysSwI6Fjgf8aW8PqZ1Z7emTIrPBacWaxx0CB6lmlmfC7nb5cYzn6/8abNu44URGxt5zDNapgRGbLLIu4O46c9Ocfz5aCrrlsnpK4kcVHUVE5aEHap5L5C54x+/tzqNRqVqXmM6fSNqDgSrdblQWfZGk7VFSc7YYkbDtkZ/wA/poVFmo1BPpAX3j1nh9dR5PMAVt7qJqgpcKH40xgbGRO7C58scc9Oum6tCxGazj9ZBZF4MMXns/8AEpNdLBI81v3FnhXcJKcnnGBnjHn00ZLVcZE6G+i3TPsuGD79j9IvwPDDJGsSFGDZ7vcGz7k44J44/wAaLxKc95cvF4qYTHPcY4zJEgjiJU72H16nn9PXU4gjYlS5MVaqqrbhIzoGSIkAcYxjoNRkDrM6/VlvSDgQp2U76kvVLNXQy1FCrEzoFZgBg84A5wcHVH2upAgE1QVuTH6S/m+U1XbLNDGkbbY4qdlCyQ4ydwA56459dZj0mqzfZ+H37y+o1yshRFyD3i520s9PFHS1FTLGZ45FikfgAjBJB8sg4/PRtPa+WUciU0u18Z4kECz2VUqbfAstxqyRTLjwxxg8ufmeB7AnUOFtBWw4Udfk+01huU/6YyZf+0r1HTdyLbV96GZ37gqRyc/PHOqroULFgeDGjq3VQCvMVLl2jqXcxywSow4ImbkfTGmk0SjvE38Rb/jKFLPUzyqweRI1IJ2sRnTqUAKcRFtTvsUv0yJpXYy7VT3WngeomaGbwEBhx585B446cawzWDlWHWdf4potLbo3vVQCBxgfxj9ZHJf62Ooent4JpgWSKFVyAmfbk/XPXVq81niD0/gumpoV7shsZJzjB/xxFztFCs9RAIH+Gn84tu4qfkP/ABpylVQEt0mdrdTqNTtqrzYQeGHQ/p+Z6fMjgoalVBnrp8jjEaKD+Z1RrdP2GYdPCfFGX/aPxH8SeJmoadKykppvimnaE1FQQ7ou0ElccDqfU6OjJj0niYGr02oouKagYP3+kN2K5NWUxWRNtTGdssZB59xnWFrKBW2QeDD1uCuIbRhRQrthLDdvbk7vl/Bn30slmT0liIaqbbFLSGptDPHHPt3AfijwMkMT0Gf1x56aXU2UAvSfT39/pAmtXIDDmZrcuxl6oaxp7TNGzIdymObY4zzgZ641oJ4vpLUC2fqIFtI4gU/bDdooam4RySV6MoKyjaWH4R7efB9daNa0vVtqPH394izoV9JEdqG7QVFPJURyKEiPeMxkIdWGS24H1weMc46aQc2J6SOfv7+Il5BDYMvJdLde7DstNdsq9wMpZBvT/wBp6DjWZd/UafU77V47ex/Ef4mrVTVswZPVQVMxantUagzBAZMYCLjlj/PPQhqVTJsOQPvEdprHRBCVs7I2yjl7+RDU1O3HeSnOB6AdAP11m3+K32DapwPj948unrU5IyYb+HiB4iT/APnSHn2/8jC7V9pkNffLjYO6ktNQYZp8MyINwZR6r9ddzovUzHsJfxLVPZ4dS+oGLfvP7S2na651tOVuNnteGQr3kkO5ifXHOju6g+k5nPHXADpF1aOBpzLMTLITne5zj5DUea7cTNu1jMeIZoobekitUFZQG4jkkKKSPUgf4Or1qOrH8Ik9th7Q3Pd7TXUBtqq26U4Kw/dxIM9c9Tx5n6ab8yvG0QWXUZMC7aS13iih7M7qqtLYZ5DmNhjxADjw9edAtrS4bBGldmBZzwIWkv1JJcYIaamhrKakppJJmzu2Of7h5FjwBrOFVip6sBjx98ianhmQ2SvEioO0MnxMC9o6P4WBFLU/h8DAgcEnjIA/XQn02Bmo7vf+fxm9VeQcONv30kldfaJpD8BMqRqDhRLkk/z015areMcQ5vrwc8xK7RSCqkL5ZvMkr++tOksvUzN1ASwcRy/p3bOzVTb5pb0iy1K/giZ8AL67fPPrprUWumAOBMzT1I5OecQXeZ1s19kmtLMYjuwqrnuyVx++s/aG7zpaNW+zyypYcZwOPsyk3aGWhszRK7RvO5AwMMEHX35OrJS3aB1eqos1HmWjkdjnr24kFifcDUOBuY5GecDQdVwdom94MfOrNrdW/QR3h7SCltfwVDbKdSU+8kZSzE/v/wCdUF+E2qBBvUBrSursIPVewI/kdx+UByMqU0EHdsWkLMxVRvVWIBxngHwjrqa88YmZ4hs1ttlob0KMD5YZ/wAZ/WRy0NxtVaJ5Zlp6rbkQsMk4BxuAPU45HtqD5dqFCMic8MqYas14+0po2uKwwToQ8MYfAl3dN2fw+WPYjWdqtG2nBCZwf0+n1hq7d55h6W4pQQyx07bpZXzKM+HcDj8hrOVbLODwsbwFGe8auz4sVytsaySKap4wXOQCD7a2NLp9IybWHq+YtY9oOQeIu9pLArRSx1rLNAP9qqRdrIPLd5Y9ccay0vOm1BWr8vf7/wDIUhbV9cx7tPaq62V5WsXKP/tzKDskH/Ptrq9Jq01KbkPPcdxEHras4MEKZUbvIWdWA6oSDprbngiDPvNz7G25rXZ4Ipnd6hlDTM7End6fIa4PxPUefcxHToJ0lFHlVAd+8Yd3OsrELictOAcHUhMyRXmYNSErK9XVSh525wfLX0JgMbFHE5LV6p733OcyaWt5JGAuepPOoWsCIspbiVjK8v4VJPkTooUzwAWSrCQFWU7vPbn66IKyekqXHaTLgDbGvJ6+/wDMauKlHJgWyesiMzGb4aiBlq5vACnkPMZ+Wqtg8xiihnPI49veWaGa5WOVktsZLcirkC8yHH4Vz6Dz9dBsSu9cH8Ju1B6TkfjDdD2ipZY1RHV0x+GRQc/MHSApurb0zVF9Vi8wdfYbfdS0sUVLCcZPcoFJ/LTKX3/7oGzT0MPTFB4JFnMSybl//by1pUjzOcTHvzVxmGKO2rVTQpJjCDjB6+2de11vlIMdY34FpE1Vxa3+xeT8zQKFLfa6aGRqenqZDCWmSpyEjJbAAx541jq6rjjJM6DxDVf09ykHbVnHp68c5/OK19ip7lukipe7BHgUN4QM5GPodXS3a/EGi163SGywhQSeT/cT+3x8e2IHtMvc4hkwHQkEZ0XUpk594fwTVKqBM9I32doo6SrrKsCOn2iKOQ9e8J8v566QtqYj0wf/AMitOpZaEGSMk/AlG+19NTuYvhmirkCkyu2UAAzyB5aZqrZuWMw6Q6acOH9J5x+kNXG7VdylZ6+laleMoQincXJx4h6nI6HoOvnqu3Y+9GB+sRyMYMWL3DHT1UcirLC24fcxkHD44x5Dp/MaYTc2d2OZCkDpDcT/ABah6hmLuvjwf7vP99Y7jyzhRxNFTuWHqKwzG2RVlsnYSJ4WQt0xxjSVmtC3FbBLBOMQ3Zu0SsDQ3kFXA2rIwznPr7ardUtq7ifoe8jpKt3tNJJSyQSGKW3Sf2O3iib/ALT/ANPmPTQdNqbFcMvDjv2P1++ZJQEbT0mYX6ytZbhTRGQS087gxPwGwGAIPvyPnnXYaTWjVUM2MEDn8u0z2qNdqjtkf5mswSFejDXCuvPM7FlBlkysR10LaIHYJw5Mhyy51YcSRgTCWY7QoOAdd+BPn8sJCg28ZyOp0ZQINmJM5eV4yEQ4B0UKJ4KD1nSE5HP4uup6SMcSrXVEqM0KNtTHl1PGqkw9NakbjJoJnttiiuFI2ypqJWjZ+u1Qc4HpnHOhlQ52HpNJDsXcOsPWW6VDZeQRSF3O7emcnHXSrqK8Fe00KzvHqkM1BR3WaWaWnSFyesGVxwT0501Ud3WL3KAARE/4mc/dmRioPGiBFixsYd4StKKd7HrnGnqEAmfqHbMKQkpUgKeMazvFB0nU/wDxM53j76Q9QXCU7reyRNAw3HK+LOPXWUKwcMesb8T8K0ys1ygg4J6yhcJ3dFYnGYk4HT8I17aAeIx4VRVVokuVRuYcnv1ifvZaw4PV8frrW2gpObe101LEHvD14rJw60gciCA7Y08hwMn586WCDMf01rBTZ3br9/EgvFZLJcIKp9pkcIjDHBG0eWrKo5WYyudu3tmM9rqnrK/u6pElQ1SKQwPI1mFRWPT7STzO+2Fsp6a6QU0e/uGnYbGbOOM8HrotLkA4lTA9jqZjdpKVnZovEVDHJXHpr2qRTSH7xmhjnE0Ts/Uy0twpVhOEnfZIp6EYzrm9XWr1tntHekJdr7dTFROFIk3dRpbw6987Z6wcZi/cppI7vS0O4tBBEJArc72PPi9ddI9aVL6R2iauzekzPu2FdUVVzmaZ8/DNtiA6KM5/zrZ8PpRNOMf7usVttY2fTpNKt9RJJTo7HllBOuNtQBzO1pJZQTCSO2eulCBLkCTqxxqkGZ//2Q=='
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 text-white px-4 py-6 font-sans pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <img
            src={img}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex items-center text-sm gap-1">
            <MapPin className="text-yellow-400 w-4 h-4" />
            <span>Jumierah, Dubai</span>
          </div>
        </div>
        <User className="w-6 h-6" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white text-black rounded-xl px-3 py-2 mb-6">
        <Search className="mr-2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-transparent text-sm"
        />
        <Menu className="text-gray-500 w-5 h-5" />
      </div>

      {/* Section: Food Packages */}
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-lg font-semibold">Food Packages</h2>
        <button className="text-sm underline text-yellow-300">See more</button>
      </div>
      <p className="text-xs text-gray-300 mb-3">Min 10 - Max 1500</p>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="bg-white text-black rounded-xl p-3 min-w-[150px] flex-shrink-0"
          >
            <img
              src={img}
              alt="Food"
              className="w-full h-24 object-cover rounded-lg mb-2"
            />
            <div className="text-xs text-green-700 font-medium mb-1">Non Veg</div>
            <div className="font-semibold text-sm">Desert Combo</div>
            <div className="flex items-center text-yellow-500 text-xs mt-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#FACC15" strokeWidth={1} />
              ))}
            </div>
            <div className="flex justify-between items-center text-sm font-bold">
              <span>25 AED</span>
              <ArrowRightCircle className="text-green-700 w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Section: Most Rated */}
      <div className="flex justify-between items-center mt-8 mb-3">
        <h2 className="text-lg font-semibold">Most Rated</h2>
        <button className="text-sm underline text-yellow-300">See more</button>
      </div>
      <div className="bg-white text-black rounded-xl p-3">
        <img
          src={img}
          alt="Most Rated"
          className="w-full h-24 object-cover rounded-lg mb-2"
        />
        <div className="text-xs text-green-700 font-medium mb-1">Pure Veg</div>
        <div className="font-semibold text-sm">Desert Combo</div>
        <div className="flex items-center text-yellow-500 text-xs mt-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#FACC15" strokeWidth={1} />
          ))}
        </div>
        <div className="flex justify-between items-center text-sm font-bold">
          <span>25 AED</span>
          <ArrowRightCircle className="text-green-700 w-5 h-5" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white text-green-700 flex justify-around py-2 rounded-t-2xl shadow-md">
        <div className="flex flex-col items-center text-xs">
          <Home className="w-5 h-5 mb-1" />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center text-xs">
          <Package className="w-5 h-5 mb-1" />
          <span>Package</span>
        </div>
        <div className="flex flex-col items-center text-xs">
          <Armchair className="w-5 h-5 mb-1" />
          <span>Seating</span>
        </div>
        <div className="flex flex-col items-center text-xs">
          <Utensils className="w-5 h-5 mb-1" />
          <span>Live Food</span>
        </div>
        <div className="flex flex-col items-center text-xs">
          <ShoppingCart className="w-5 h-5 mb-1" />
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default FoodPackagesScreen;
