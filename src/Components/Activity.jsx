import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
import { BiFilter } from "react-icons/bi";
import { Accordion } from "react-bootstrap";
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import { BiListUl } from "react-icons/bi";


function StatsRow(props) {
    return (
        <div className="row mx-0 py-2 border-bottom  row-hover">
            <div className="col d-lg-flex d-none align-items-center justify-content-center">
                <MdShoppingCart className='me-2 fs-5' /> Sale
            </div>
            <div className="col-lg-4 col-8 fw-600 ">
                <div className=" w-100 d-flex align-items-center  py-3 px-3">
                    <div className="d-flex justify-content-center ">
                        <img
                            src={props.data.image_url}
                            className="small-img"
                            alt=""
                        />
                    </div>
                    <div className="d-flex justify-content-between col ps-3">
                        <div className="d-flex flex-column  ">
                            <span className="text-faded text-small">Designer Apes Club</span>
                            <span className="first hesding"> {props.data.name}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col fw-600 d-flex align-items-end pe-lg-4 pe-3  flex-column justify-content-center">
                <span className='text-faded text-small d-lg-none d-block'>Sale</span>
                {"< 0.0001"}
                <span className='text-faded text-small d-lg-block d-none'>$23238</span>
                <span className='text-faded text-small d-lg-none d-block'>2 minutes ago </span>
            </div>
            <div className="col text-small-3 fw-400 d-lg-flex d-none align-items-center  text-success"> <Link to=''>AdoptCat</Link> </div>
            <div className="col text-small-3 fw-400 d-lg-flex d-none align-items-center  text-success"> <Link to=''>AdoptCat</Link> </div>
            <div className="col text-small-3 fw-400 d-lg-flex d-none align-items-center  text-success"> <Link to=''>AdoptCat</Link> </div>
            <div className="col text-small-2 fw-400 d-lg-flex d-none align-items-center  text-success"> <Link to=''>20 seconds ago</Link> </div>
        </div>
    )
}

export default function Activity() {

    const [sidebar, setsidebar] = useState(1)


    let data = [
        {
            "id": 110,
            "symbol": "MATIC",
            "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
            "image_url": "https://lh3.googleusercontent.com/w_HwViosyyCvZhCShTgqXV4s3Ph2qO_b2VgU27oRMUyG2XQB72ym0jNLhmInBsBKjvuWAd5cgMKjtQeHSqmFbPrz",
            "name": "Matic Token",
            "decimals": 18,
            "eth_price": "0.000224561180432",
            "usd_price": "1.940000000000000000"
        },
        {
            "id": 109,
            "symbol": "DAI",
            "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "image_url": "https://storage.opensea.io/files/8ef8fb3fe707f693e57cdbfea130c24c.svg",
            "name": "Dai Stablecoin",
            "decimals": 18,
            "eth_price": "0.000249830000000",
            "usd_price": "1.000000000000000000"
        },
        {
            "id": 108,
            "symbol": "YUMI",
            "address": "0x25859743ed0861665611b81e47682e889b48313b",
            "image_url": "https://lh3.googleusercontent.com/vokAIl7T2WLLpsOHNvLVwU4zJo8Bs4T3eSbJkz43kCCg_0ZU0DAmzwBMkxX-EM3IkPqKlpE-yEzXsAkLZ5J3ciyv",
            "name": "Yumi",
            "decimals": 4,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 73,
            "symbol": "SAND",
            "address": "0x3845badade8e6dff049820680d1f14bd3903a5d0",
            "image_url": "https://storage.opensea.io/static/miscellaneous/sandbox-token.png",
            "name": "SAND",
            "decimals": 18,
            "eth_price": "0.001314260000000",
            "usd_price": "5.140000000000000000"
        },
        {
            "id": 72,
            "symbol": "HYPE",
            "address": "0x2630997aab62fa1030a8b975e1aa2dc573b18a13",
            "image_url": "https://lh3.googleusercontent.com/sjX4W6NKngWO0-Le7Ngwg12EHz9TdjJor6Rgh-WD6N4HdixuM5HUxiWrZ3LdqqKUuwzQUobPpupUev6JybB2F7SG",
            "name": null,
            "decimals": 18,
            "eth_price": "0.000011260000000",
            "usd_price": "0.000005620000000000"
        },
        {
            "id": 71,
            "symbol": "CUBE",
            "address": "0xdf801468a808a32656d2ed2d2d80b72a129739f4",
            "image_url": "https://lh3.googleusercontent.com/MWyOpZRNd0LncYmw7yRMfvvB6J85vBNpqpSpEVXPEwhQOlnzTj2QFT84-LqUVIbrFq2tnj8U-m2K_u60RINGAWU",
            "name": "Somnium Space Cubes (ERC20)",
            "decimals": 8,
            "eth_price": "0.003679360000000",
            "usd_price": "14.720000000000001000"
        },
        {
            "id": 70,
            "symbol": "DOOM",
            "address": "0xa4f9cec920ca520a7feb2c3a63050e08967bc111",
            "image_url": "https://lh3.googleusercontent.com/-1olt_ZoPvjZMMfDKQlA9hz_rcgNUNMWbCBXq3NMj5fYYCkNndZJ0J17JmBfT69RhCkbU7ApZrcMupvBZ08SkZ6F",
            "name": null,
            "decimals": 4,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 69,
            "symbol": "WGM",
            "address": "0x219803d17f3067eb53d521ba8948d2734f402f7d",
            "image_url": "https://lh3.googleusercontent.com/LemqIRa9YkcMQ7no_xzhJ9m3CQGHgdBa42-GGNqjNE-ZytuAo1mhTDnmEO-fucA4wfnjMXi9ZruTBfos9sdRZ5z8RQ",
            "name": null,
            "decimals": 4,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 68,
            "symbol": "GOU",
            "address": "0xb19977b23b40d59254b8f5a0bdb67076b4fa0bc6",
            "image_url": "https://lh3.googleusercontent.com/D0O8cXGBiBCF_KRIUSocDSpVrXkue5I_n5X0c5UK4Z2QA3-sJrGhaj-TV_XahgSgN4ByJq3TXh3C8x2KonL2G1yy",
            "name": null,
            "decimals": 4,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 67,
            "symbol": "SKULL",
            "address": "0xbcc66ed2ab491e9ae7bf8386541fb17421fa9d35",
            "image_url": "https://lh3.googleusercontent.com/-dqlcqUQ_XxKAlOEgaM9o_SuBnT2yRd7tLsFDuOms9giF8g5i4PQGkYjVs6Eu63NUOqL-vWkx9RkQU0Oe7LuUNAn",
            "name": null,
            "decimals": 4,
            "eth_price": "0.000055790000000",
            "usd_price": "0.224635000000000000"
        },
        {
            "id": 66,
            "symbol": "DAPPT",
            "address": "0x386cabc0b14a507a4e024dea15554342865b20de",
            "image_url": "https://lh3.googleusercontent.com/CN5XIYA_-xalDt_OyIPa0LWIySeb6a9KRGYP3Q4HpQiWhGBSwus4tWInxrMtsbzbOrEtCAGiO65Pr1dTBk4Vhxi4",
            "name": null,
            "decimals": 18,
            "eth_price": "0.000000279767020",
            "usd_price": "0.000602330000000000"
        },
        {
            "id": 33,
            "symbol": "BURN",
            "address": "0x91ca1146073b0cc9f57a1dde38a0ccb1ab2a3317",
            "image_url": "https://lh3.googleusercontent.com/8v9pd-32u9MxTNGq9YXIBEtC_2mVu2HNdRrpictIzxMJrr2o-jFGiTenTE3J7ZJZgvAdZ4DDVwWravb5TVSRlZbZ",
            "name": null,
            "decimals": 18,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 32,
            "symbol": "HUE",
            "address": "0xdcfe18bc46f5a0cd0d3af0c2155d2bcb5ade2fc5",
            "image_url": "https://lh3.googleusercontent.com/tSiF8az24vzj2w-jc4TCjX6QFYi4rBaCj5uGXA9RfWb3bKiz6fyJDTwgl7WZ1N2afYcQCFM8_1CVIZEkgUvNVSes",
            "name": null,
            "decimals": 4,
            "eth_price": "0.000010980000000",
            "usd_price": "0.044691390000000000"
        },
        {
            "id": 31,
            "symbol": "WAXIE",
            "address": "0x9e8534fd246256abc96b3ff24cd47f76eedcfc6f",
            "image_url": "https://lh3.googleusercontent.com/2RCHc_DQUCAy1-18gfxioULZKy6_8IhwzMPdBPouOpy0VU8hjOhSx-HlURU8kfu7SyvyDxGcfOSF8k6A6CjkgV_B",
            "name": null,
            "decimals": 18,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 28,
            "symbol": "CLC",
            "address": "0x1a94656a6245379bc0d9c64c402197528edb2bd1",
            "image_url": "https://lh3.googleusercontent.com/UkxleCfZcxdaQhd4qKA1pJmDw8Px2cVWeiu2INpZgzxMcCP90ZDH27xBOe-ZT0Etb2EBJrBUkO2p2n7kWoijTq0",
            "name": "CloverCoin",
            "decimals": 18,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 27,
            "symbol": "MBC",
            "address": "0x8888889213dd4da823ebdd1e235b09590633c150",
            "image_url": "https://lh3.googleusercontent.com/Jg41L2FCRdXGFOCejBU5ZVSl3BhZ7evO77dMfft9WuLi0AWvplrZQixfYK-CfejSii7nNyBjiqZVB-eJwIKr1SsXPg",
            "name": "Marblecoin",
            "decimals": 18,
            "eth_price": "0.000313750877639",
            "usd_price": "0.147822000000000000"
        },
        {
            "id": 26,
            "symbol": "BLVD",
            "address": "0x3afe25a2739b5c2e08cfec439f9621d91ff7fbfb",
            "image_url": "https://lh3.googleusercontent.com/uKH5kdnWEwt40vjbsxKzyT4gXHHogRQfNbHvJaHG1TSkvdw2I7C2fcLsFn97qeqexoBvopAtkILfE-tvT8usz6P0",
            "name": null,
            "decimals": 18,
            "eth_price": "0.000000000000034",
            "usd_price": "0.000000000071000000"
        },
        {
            "id": 25,
            "symbol": "GPL",
            "address": "0xeeddaa78e0b2de769e969bd049c8faff3280df97",
            "image_url": "https://lh3.googleusercontent.com/-ZXNAUxHmAQrFJCf2K5MI_w1ekSRT4NECwFOcInLcUhBVoxv4S_vwrS7mM4DVGuGCAF0xifOxadRld6d1QS_tq8zKA",
            "name": "Gold Pressed Latinum",
            "decimals": 18,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 24,
            "symbol": "WMC",
            "address": "0x8aedb297fed4b6884b808ee61faf0837713670d0",
            "image_url": "https://lh3.googleusercontent.com/m8RnC37nz-L-SomTReg2bDWRx2vEfoHFvexKyB-gnZd8x4LUL9hn31g4uxWPEQcvlZ59a4tGn1z5VallzGt27c7hGg",
            "name": "WrappedMarbleCards",
            "decimals": 18,
            "eth_price": "0.011145325984200",
            "usd_price": "9.460000000000001000"
        },
        {
            "id": 23,
            "symbol": "ELET",
            "address": "0x6c37bf4f042712c978a73e3fd56d1f5738dd7c43",
            "image_url": "https://lh3.googleusercontent.com/FtbqRn2VEYGwYi30QccARDb5JL0QzssOpi4qAe7Gphdl75JoKlHuUQrHMRk1pHYa5nUJOQr1gX5ZxXic9T8JcdazcA",
            "name": "Elementeum",
            "decimals": 18,
            "eth_price": "0.000058456018531",
            "usd_price": "0.003019690000000000"
        },
        {
            "id": 22,
            "symbol": "WCK",
            "address": "0x09fe5f0236f0ea5d930197dce254d77b04128075",
            "image_url": "https://lh3.googleusercontent.com/L5nvau4G9vXrA4AUs8OLxddBBEQHQZgUuUqnv9PzGo5mMgDm3_7pKhy8HPeWnqYCqKBi3MkhY6vpzq0HnV4aAEY",
            "name": "Wrapped CryptoKitties",
            "decimals": 18,
            "eth_price": "0.003858847984609",
            "usd_price": "7.220000000000000000"
        },
        {
            "id": 21,
            "symbol": "RCC",
            "address": "0x9b6443b0fb9c241a7fdac375595cea13e6b7807a",
            "image_url": "https://lh3.googleusercontent.com/ZvoszxH9rWpB9JRlrhWnRw1qi7BmVZBXuzcuGIb8ykI-DlDcCRwZWgFTDPyIaY19zwbHIAm6meHE0GL2sV5GEG2qRg",
            "name": "Reality Clash Coin",
            "decimals": 18,
            "eth_price": "0.000012724298547",
            "usd_price": "0.027536400000000000"
        },
        {
            "id": 20,
            "symbol": "GUSD",
            "address": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
            "image_url": "https://lh3.googleusercontent.com/MLKbcx1oxhZjkXzsQM-fju8R3hHqsu-mGpFzivWMadH7bXT_kw48-rrD6os594lPY0x7MU-QGLy4ZudX1ePTx-Y",
            "name": "Gemini dollar",
            "decimals": 2,
            "eth_price": "0.000563900421820",
            "usd_price": "0.997548000000000000"
        },
        {
            "id": 19,
            "symbol": "COLR",
            "address": "0x3867ef780a3afcf1201ef4f2acc6a46e3bd1eb88",
            "image_url": "https://lh3.googleusercontent.com/NBdYmc9XOv9k0aNeOe309lQ1obzAu7q-SKBa9lUDThBQpvDhYM7I_vw2ONLwympsEj3ryilKCTKZibFNuZUky-4",
            "name": "Cryptovoxels Color",
            "decimals": 0,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 18,
            "symbol": "ENJ",
            "address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
            "image_url": "https://lh3.googleusercontent.com/l9kffrrCmJQ4rmUONIKoV2tx1cQr3ejM2oKhtg08njtUo11tCCwmvTVgA2wD3akBIoMTdepIwrc62e105rRtmin6",
            "name": "Enjin Token",
            "decimals": 18,
            "eth_price": "0.001453978538613",
            "usd_price": "2.520000000000000000"
        },
        {
            "id": 17,
            "symbol": "LUNA",
            "address": "0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a",
            "image_url": "https://lh3.googleusercontent.com/sr-jwxBVvrRPvH8uPuiItUp-smZYM1rejoQZLCcLh_k2xXrzOKJ8Nsd8Thg4dbhxc8gLSTBzviSXINcYjrckK3hLCA",
            "name": "Luna",
            "decimals": 18,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 16,
            "symbol": "GOLD",
            "address": "0x150b0b96933b75ce27af8b92441f8fb683bf9739",
            "image_url": "https://lh3.googleusercontent.com/I1faA_cMbNByJROtRbO9Kh_A7WEehFo3e6CzmE7UIGwDgvxwwtPp0ldm03n1GwWdGtclcHNpLofkhvlWQzXRVcc",
            "name": "Dragonereum Gold",
            "decimals": 18,
            "eth_price": "0.000000012006000",
            "usd_price": "0.023915530000000000"
        },
        {
            "id": 15,
            "symbol": "LESS",
            "address": "0x7ca121b093e2fbd4bb9a894bd5ff487d16f1f83b",
            "image_url": "https://lh3.googleusercontent.com/C2hi-yHngr0wpX-1b30Pj9gNMn68q_g-9uLqOX8lgsqa0YGT7kPzqd6q8tcN4vo-VTepZq7wXSwZFkYciXwbroeD",
            "name": "Lordless Token",
            "decimals": 18,
            "eth_price": "0.000000026330144",
            "usd_price": "0.000057440000000000"
        },
        {
            "id": 13,
            "symbol": "RFR",
            "address": "0xd0929d411954c47438dc1d871dd6081f5c5e149c",
            "image_url": "https://lh3.googleusercontent.com/XB1KohVuy2E87R324IGijVhDZeHKhlkiB_TcpAH8sVTCdaA5brsYyxYXNzFK6SE2qGAtfya7FVzB9rgJBYQrjJVqeA",
            "name": null,
            "decimals": 4,
            "eth_price": "0.000010784551340",
            "usd_price": "0.013101680000000000"
        },
        {
            "id": 12,
            "symbol": "MX",
            "address": "0xf6c868c4f2a48949ff9b01e67acd206543352fcd",
            "image_url": "https://lh3.googleusercontent.com/gRio70ZkAnSBva-lqrVS6bav5DwL3tqsElec7427qqqU-UE6Y2-Rzrxoqoweygj2BCduXdfvery6WAft6eS_HrpjMg",
            "name": "Mythex",
            "decimals": 0,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 11,
            "symbol": "EMONT",
            "address": "0x95daaab98046846bf4b2853e23cba236fa394a31",
            "image_url": "https://lh3.googleusercontent.com/7fmMQgiIfoPW7rkcUlj5C45F58ADyONBjZyOARw0R0vxFfodvV8vXWBq3UUkjOxqiOhPlGn192gNF4pTLlF0qBtIVQ",
            "name": null,
            "decimals": 8,
            "eth_price": "0.001205198940752",
            "usd_price": "0.017100240000000000"
        },
        {
            "id": 10,
            "symbol": "BZN",
            "address": "0x6524b87960c2d573ae514fd4181777e7842435d4",
            "image_url": "https://lh3.googleusercontent.com/EvEox93_axb2t1rD7MIatt74ylGZ0jFMrlnVZOQXzr1-a4HR_Hx6X8ifZgXF2Zfyz4PrRPq7J1-cG1ktGUtvj10W",
            "name": "Benzene",
            "decimals": 18,
            "eth_price": null,
            "usd_price": null
        },
        {
            "id": 8,
            "symbol": "IMP",
            "address": "0x48ff53777f747cfb694101222a944de070c15d36",
            "image_url": "https://lh3.googleusercontent.com/UHaeswU6Gcv-z0URNUPLJuXan11rXSh-zP7M8GtHTX0blti7RdTe4hfzPFnHdIrqv-sR9g2wJKx9O53g1hFACyan",
            "name": "Ether Kingdoms IMPs",
            "decimals": 7,
            "eth_price": "0.000001906287490",
            "usd_price": "0.004883210000000000"
        },
        {
            "id": 7,
            "symbol": "USDC",
            "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "image_url": "https://storage.opensea.io/files/749015f009a66abcb3bbb3502ae2f1ce.svg",
            "name": "USD Coin",
            "decimals": 6,
            "eth_price": "0.000249630000000",
            "usd_price": "1.000000000000000000"
        },
        {
            "id": 3,
            "symbol": "MANA",
            "address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
            "image_url": "https://lh3.googleusercontent.com/hsrIlncQIGqCWc1qQ7CUAIuVsNFwzuSmr_dCEpbUYnO_YO0VWoGZzCxVlDVSgcxATeuPcCQPdOh3t5PhXj_c8gAQ",
            "name": "Decentraland MANA",
            "decimals": 18,
            "eth_price": "0.000863140000000",
            "usd_price": "3.410000000000000000"
        },
        {
            "id": 2,
            "symbol": "WETH",
            "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            "image_url": "https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg",
            "name": "Wrapped Ether",
            "decimals": 18,
            "eth_price": "1.000000000000000",
            "usd_price": "3990.579999999999927000"
        },
        {
            "id": 1,
            "symbol": "ETH",
            "address": "0x0000000000000000000000000000000000000000",
            "image_url": "https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg",
            "name": "Ether",
            "decimals": 18,
            "eth_price": "1.000000000000000",
            "usd_price": "3993.570000000000164000"
        }
    ]

    return (

        <div className={sidebar == 1 ? "row mx-0 border-top " : "d-flex mx-0 border-top "}>
            {sidebar == 1 ?
                <div className="col-lg-3 px-0 bg-dark">
                    <div>
                        <div className="side-item" >
                            <div>
                                <BiFilter className="fs-4 me-2" />
                                <span className="fw-600">Filter</span>
                            </div>
                            <AiOutlineArrowLeft className="fs-5 pointer" onClick={() => setsidebar(0)} />
                        </div>
                    </div>
                    <Accordion>
                        <Accordion.Item variant="dark" eventKey="0">
                            <Accordion.Header  >Price</Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex flex-column">
                                    <div className="append-element-input">
                                        <select name="" id="" className="form-control">
                                            <option value="1">Ether (ETH)</option>
                                            <option value="2">United State Dollar</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <input type="text" className="form-control" placeholder="Min" />
                                    <span class="px-3">to</span>
                                    <input type="text" className="form-control" placeholder="Max" />
                                </div>
                                <button className="btn-1 disabled mt-1">Apply</button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header > <BiListUl className="fs-5 me-2 mb-1" /> Backround </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <div className="d-flex">
                                        <input type="checkbox" name="" id="" />
                                        <label className="ms-2">Light</label>
                                    </div>
                                    <span>700</span>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
                :
                <div>
                    <div className="side-item d-flex align-items-start pt-4 me-2" style={{ height: "100%" }} >
                        <AiOutlineArrowRight className="fs-5 pointer" onClick={() => setsidebar(1)} />
                    </div>
                </div>
            }

            <div className={sidebar == 1 ? "col-lg-9 " : " col"}>
                <div className=" ">
                    <div className="row d-lg-flex d-none mx-0 mt-4 px-3 py-4 border-bottom">
                        <div className="col fw-600 "></div>
                        <div className="col-4 fw-600 ">Item</div>
                        <div className="col fw-600 text-end pe-lg-4 pe-3">Price</div>
                        <div className="col fw-600 text-center">Quantity</div>
                        <div className="col fw-600 text-center">From</div>
                        <div className="col fw-600 text-center">To</div>
                        <div className="col fw-600 text-center">Time</div>
                    </div>

                    {
                        data.map((row) =>
                            <StatsRow data={row} />
                        )}
                </div>

            </div>
        </div>

    )
}
