import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Navbar, Nav, Form, InputGroup } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaHome, FaWallet, FaListAlt, FaShoppingBasket, FaMicrophone, FaCamera, FaRobot } from "react-icons/fa";

const OrganicStore = () => {
  const categories = [
    { name: "Fruits", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8juyKCHrQ2p1MTFBQ-oAxBjJXet8b5X6aWlxyQ05A30_g-W025JbMFidV4MyOgo8OFJjV0rp1F3xaD860dtppU-i5u4J2mc3ssaQEPhcRJpVWwRfIpVOQzxSIceWbtzfTvMrEDoZzNBW3IgnAGwrMPlxJ8FYF31trU5n9xriuZ4vIlFkr0Tc9q_4oKWemRsXKgYY5cyFs5hwBvPQqfgTz_xu_Fz5I8qjcnP3mrNGe5v1pQA5g5wkvM9xurt7JsIfVklqryPQ0Rb2I" },
    { name: "Vegetables", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDC2fzJCfgig3ohS9MMM13JqpKf6g-S4uYbcH8LU4AYDU2-QL5nAF__dmwCD-OfS3Tk67TTiglE3aqi8j745KaF6pEpBakmr4eEfCjetI6rHhuw53EdQt2YeeZ1_G_yOOwMaG838Tm69HLb4FCFVKR0hUdiWYogw_BOXiCwPqXG1dOHg6BFZcZAR6_nHckm_patHhJdgh_mHpAqVlZJOXklb6NGrfJCk3Q3Savxa47MUNyUn_1kvx_2Exdy4ChY1Wubq6yIXcxaqSq" },
    { name: "Dairy", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnpsSmJprYKM3HBRaRPmy3K_cMrsFvfsHOoDymuMduiSLNGaZGnkMyJoMC0_vXpCTx5-rTf06vBPzg_Au76edd145DRxneSPeGSnnSWsgN_6CQMshF2cB2tWjQtjztoR5X_paNrAKIuVuTx6TP8X_frn_a3zuFtZc41mc2AaFNm0DlzM-9V_S2_Uu3AEDJtXmEyg7m5VNM_7k-hjphPbBVsvgg6EvtahfsjK-auWUf3UhHh0PFBkzRN0XJs22kFJYe6t9oJxWtjgjg" },
    { name: "Bakery", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKyVbRS5tCzTJbPC0iRqIPpIfkpIuujm8At6ENxxvWJFJ8D1Y29AYmsz6LwtPG11rvtfC5bZi7LNkq7Wg4gipCqhgArGxzhzE2XoE8CziYx7EMWF721SosImOLk16Fn2ZxVsTU7pdLp-fSWk8s9OXPAtOVuoej6HZcvWWxYEvoj9ub4g3QncWRsSTBMycWRaR_MSgPOldXD2nkOJYpn-3X_Q9D0BJ37OG4esCfBVQTX0owNV5B0QxGnyLK7_XTH4Y__cw27CMMYmDl" },
    { name: "Meat", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-_aGwDJXnHVvM1SHmu9U5YyrVikU7L9IsnlvG_OX9D5A_dL38PZBHA5N-sja1d9OGW06BQCZPHVhhMkRH7J1ynSICmBo3NqqP3VNIYevsMladyQI7-CEkmCvaYFrJVLiGedUVnWWt5ZIkor727OUSya2GXS0MK9Fb_hm8ASA8R56oaRSrN1rBzmfxgswB0-TlzwChdRxwqAY7CzQKBviC1Gjmu5t3XwnYTl-K9f-K-nq3ML2obJKIFWrpjPgqCha3AtpAip6IrK_h" },
    { name: "Seafood", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT_XIxnvOCyXj60c7CrKWEq8JkuMI-dJX1AleNWoT1KYau4dAn64ZEWUzFEwxdt5BtBoGKB7a_3wZ0gIWm-iUWktT4eAqMwqsraN2Cba3JEBns88rMw28rK27xMNVOCr-r_zpW2YahUK-qRZnNBb1Zqu0hEz16qiDU6VWixfkEw7KGxkDT-Qwo0vs3zda6ThLchNw3Eh5GD5wqTgaiX_BJ5ylKKm21Uq5FRGe2zLQh6hwVDVO__4_1yjvKNujmzAjSRO9IE0gP50QN" },
    { name: "Beverages", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvEqMwGkcYzwu0vrHcaFg4AAqZuqS8LIbZEOR_5iZcuNBurBS9HgJxDboGX9PE7aHbTisc2okyGGkvfb0PjBent-1fPTIHAtoRd4EIcHrGNVccNxlvpdudcfC95JpxUSqK_at_y6i4LGZspMnZnroB1gPzv2yU033MvamFbezCGsOBPkNc_jyOJU73MhN92rSZ__jRHaCQj1zCMAzYDrF1qQ0YAwqo5YpJ_5zDV8-0y47DNhTKNHyyFmNVv-Yh8Dost06bWbbV2uIa" },
  ];

  const products = [
    { name: "Organic Apples", price: "$2.99/lb", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1R6KQFHcI3EdOxAMamgZl3lFhtzvCMnLjhhGMh78i1ZzGLR4rV7IJgnIXVdpt5A8fXc5rag6dbFGNAqduAkEsgZ1ZEbnVwTrI5AANRPwxsUjDavuSaemxAJo4tyEfcVMpZgS18fGBf5gEOik0HI6adB2MqHaP1ZWjhtddHRTI0gOXMg4z2cCbHnTzfRmaD8ETrvlU5jFlzREWTfhy7U98DKMwk7nfhwu3s18oVhgt-TSXPp0vSg9DG_H7R3uQmVJGCW5TcGIipJT0" },
    { name: "Fresh Spinach", price: "$1.49/bunch", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj5fZ2F0dJnOTpZoBpizvpH01dBAlpRylDEfYUJk8tL8A1OtZiuQnTlXoD3cW1IVIumC53xFwztdB7nvSo35rCWbqZwYLyhhcOO5z428C3EjEEpCdgKVrbjfrgkxNbYSrsimCWIu5QzYljWkdx5T_IvC0Yymqag8zCgXXtYU7R6y6MliO_TfA6IqbnU6Bo074gt_vM_UYU88qE3SARq96OZEZr8st0oMHzxY_avHTEgcxR3nFammWKgZ50d-_Upd-SMyAOkqL1ReIB" },
    { name: "Milk", price: "$3.49/gallon", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPTzG44gJhV-juQsCf0HMowagKP_0ePGN1DTktAxeKdz76TWAeNJseGFpRlbircT99YWZwLIumUrGRz-EtVcDcHfYaePP_odjzkTYydw7ZdX5Ku52hb5Xyt1AYVEyoZZCTCK2e-zmpYkvDMc-ZlPzmdc3USsrLoarmO8AU3gw1ulYefJJsj-5-TaSDOjYnJbijCQt_D2Q6U5j409XH-te9na97xLKrrOk55SaLDY3Y4I1LIWo-IOvpyPSj0bMbcKE5saywcZ4hok9m" },
    { name: "Whole Wheat Bread", price: "$4.99/loaf", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO0qZjQtDEKnj9iitfms_JXgCiVg4aglSvmxKbn_RyKFe5g5EoYGM4nOrci8tERGJCAUBYhVVgsca73sUNeoJp6Idxi7Oe76vW7KEDg1K8r8Ejz2eF-p6V8fZ26Fs246S4x5X1sBlhDtsm0IoH_aV-7_MiRdszGURJyk3eIdHPvuGszZrw0TYpU4mmbjX0LdnWjALzjTaoBT3-CKltP9jvjtadhqYQns1aGWBMQ39Nt6vD4D31rr-YbUVpIlmKdBlLVfAeyzKxf8Nf" },
    { name: "Chicken Breast", price: "$5.99/lb", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBghYnr8eNEOwyecwmV-sy6A32LDmn2t1nzaacAMUoFc7truD5o9PhBL9dORQIgsC01aOj5gG5PdDo7VO0lZ4Lxfc3FzNP04sUCRiUcSegrVwBwocrxhoIG4Bwa6tdhsw6jy2Imd-WjS14LZHp8sPZHmCv_eOCEBU4xQqZg2gNBmRNgefLYS779DJRx5wpF-zS6sAyKfILouUVWffA0fjaQiFDSvAAvxfwlBeoThCedIW-BHPRdZKh3tz5EVgZmSlO0LSsury4yA4M7" },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Navbar */}
      <Navbar bg="light" expand="md" className="border-bottom border-success">
        <Container>
          <Navbar.Brand className="d-flex align-items-center gap-2">
            <FaShoppingBasket size={32} className="text-success" />
            <span className="fw-bold">Organic App</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex align-items-center gap-2 ms-3">
            <InputGroup>
              <Form.Control placeholder="Search" />
              <Button variant="outline-success"><FaMicrophone /></Button>
            </InputGroup>
            <Button variant="outline-success"><FaShoppingCart /></Button>
            <Button variant="outline-success"><FaUser /></Button>
          </div>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="position-relative w-100" style={{ height: "500px", backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAibPzFFuSqKkKRjeeDJBoONph3cbhJA6mq_RVEv9xjxss1r_1zgizU0ekA_VIZG81aDMp3EiofgKEdi04gPjnQBwWEL8lHjrfA7nhdcTEwaNTamO62Cc-s7q_vmKH9Psrmb7cKTwuuvhx_xDimRAskA-TMFGgYThFhgo8JBHCbXfNTaESJehiVrvZWna9JPmzU0mNYTrOOfN5UN08DTjwkkPAP2BopKtU3cGJ284KOY92tFIA7f2_doNsSyA3M_7T6LLg1ce1jmJu9")', backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex flex-column justify-content-center align-items-center text-white text-center">
          <h1 className="display-4 fw-bold">Freshness Delivered</h1>
          <p className="lead mb-3">Discover the finest organic produce, straight from the farm to your table.</p>
          <Button variant="success">Shop Now</Button>
        </div>
      </div>

      {/* Categories */}
      <Container className="my-5">
        <h2 className="fw-bold mb-4">Categories</h2>
        <Row className="g-3">
          {categories.map((cat, idx) => (
            <Col key={idx} xs={6} sm={3} md={2} className="text-center">
              <div className="rounded overflow-hidden mb-2" style={{ backgroundImage: `url(${cat.img})`, backgroundSize: "cover", aspectRatio: "1/1" }}></div>
              <p>{cat.name}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Products */}
      <Container className="my-5">
        <h2 className="fw-bold mb-4">All Products</h2>
        <Row className="g-3">
          {products.map((prod, idx) => (
            <Col key={idx} xs={6} md={4} lg={3} xl={2}>
              <div className="card h-100">
                <div className="position-relative">
                  <img src={prod.img} className="card-img-top" alt={prod.name} />
                  <Button variant="success" className="position-absolute bottom-0 end-0 m-2 rounded-circle">
                    <FaShoppingCart />
                  </Button>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="text-success">{prod.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Floating Button */}
      <Button variant="success" className="position-fixed bottom-0 start-50 translate-middle-x mb-5 rounded-circle p-4">
        <FaRobot size={24} />
      </Button>

      {/* Footer */}
      <footer className="bg-light border-top border-success py-2 mt-auto">
        <Container>
          <Row className="text-center">
            <Col><FaHome /><p className="mb-0">Home</p></Col>
            <Col><FaShoppingCart /><p className="mb-0">Cart</p></Col>
            <Col><FaWallet /><p className="mb-0">Wallet</p></Col>
            <Col><FaListAlt /><p className="mb-0">Orders</p></Col>
            <Col><FaUser /><p className="mb-0">Profile</p></Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default OrganicStore;