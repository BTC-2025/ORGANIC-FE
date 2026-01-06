import React from 'react';
import { Link } from 'react-router-dom';

function CategorySection() {
const categories = [
    { id:1, name: 'Medicine', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoU1Ii_DIMrtIXv8TJ10Yp0u4_2xUqCBioH9YRZgRfYeDc083AelryC27wHZVfHqQY5iRYAae_Cjk1DUmPzhJS8W2EYM50eYtu6owrKFnAs6KFj2fuvpMaCf2qsHdDBabOrZDqICGV4hbP-ycZb1SpxLQjassgFu5wvWG7xx9Jov2_DF18N77HwdbkN2AWjT0ql0YJHBsGFYW-Jel2ATESCmPyQM64z0vo15gib3475KEenudg59P_g2wCFL118nptYg5ZZiJ2TC6H' },
    { id:2, name: 'Food', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-leUUZV2xya89tNY1p1oQrqsGnWZba5u52CLVNknkJ37Km0qwuB20sDm9m1sU2EGA9n3abhupkU9R1230aaNic3klSRgyv2n23zSUGePQPBgWCGzmNIIi_9KFTBW8wwXhB7MLcQUHRNZuNpD-VE3HAoQG2513EXVBYb8Ik_ece6kLT3ivVlDXY-6JZPOJ3BMvlfElARB_BK2Mu5LHTEy6ux4DYEroZWfSMWDR5TYsqeZPxiaT9lv4h8BNrDCDtLnwM-TT4sNEjMAW' },
    { id:3, name: 'Cosmetics', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDW_xD-gYKtY3UMrlElSwgFwsw-DZJgb0r9FcbYC75VzOWAmD0hZl0nlBpWCl_D-3moBhKHkxPGWOlDumwJ_GUhWhoZ7x-OA68Nr4HrlRyRcRl8zwuDhX9WWxDlmgM4WiKcqZjdxVr4IOGyG_-T9iET17x7eEruqIYS59WpBhDKWq0WRIpAHJyAI2fy2OHP-FhJ0UtmYv8u5aba1u8f0BREBeGZJuRXY5iJougO7VNtcnF6XGEodTD1dD-qRD2024wi-BA70YYAF8u' },
    { id:4, name: 'Baby', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDsD6zfuxjQFzFeK1Q6hX0vQrxalKuRamVVjUNRL8URY4VBoV1uFrUtXUiwUslfMP6s5iDKP9d1Q4a4wlkAJPRR0e2AUxPLxr5Wm92z_S7Bbx_wvhfYDTb2EIJ20qZy3sOZ2hqNSEr6CokwjjeOhzMEJWaqt0TJ6SSumn4JCB1_bYcJDTUgztVnmKZCkwVMt3Zi2XLQ2e_6CeuL1mgUx17osSCaUbLMFAVdh2SusC_FysQWgk8Oy6xdfAiPXnFU4CRJwdyrCqY7Cdr' },
    { id:5, name: 'Essential', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQlCTXCybBnLmh29HDSXtmwIPSaQwo6zn-0A5BbgvDb-q_DlIOCjQN89nTPzXH4r9o3cFoilZTnw8FsPPNJoTU-wMG6vpCPkGEVk3Tmea_RWN5U0gDj9IWSg4PDpB-OXHXxgSK_7CBklNcqhzz-eqAV6xwuqfNvaEhHHno_se4x9mDNAs-6s8RfJALRc_bdENK2Nr5K2tVM0yYCRPk69awM7hnZE7dXFoV_dfWBsUV34uRbgpKeg3z-c2DZD0UWUCmvze5IZF9aywn' },
    { id:6, name: 'Herbal Powder', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDZ7AAuieCfaZJ7g45TWd1EZ21QW0itHQdxpFAsHY-uYMpaTK19h8Ijbs7fYjXUsQ35nTMxAIAXWVxgBuS_AJBs5HO4j6A1L-1AdJGQcb_pRo7XXAB0Yq_1TY4eeNCj6UFbaC8cgEvXddeMlbviwTtXjPViwOjjfzk_pRcfV1YgIcz8hJGFIqKYvyaL6Q2wo7NhZJmu7zFfZfiK_kyQ9nF4O83sEllEfLBi3aC9F17aJsGSIVrZiRsOWx4Hpd2ZgZBo5Jf-0oa_E8m' },
    { id:7, name: 'Pets', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdup1NAvc5jkVXwT1w8O06t5MkCSM9LJrJt6Yr8z-frAk0NuPfBHk_EIxA8T-0CMqaTyQ73ZcMWf5X7lYF7PQpSSulS4NLIF7W9aDLfDJfbFfko7m9NiDdSgHMXbTkgdD34-T0etKGV6Mv6wm-zL2jjm61nU_qJ-R-Cs4mUaDCyqH6Ssl8-Jkw9xCaKdk307KANuY53CO1yA77aysJ7Hivo3ZEqZ7eAMVOMwL_IT8sCb0CW1LNDeHHeGYzUAOL8CIHjr07iWxJZMCS' },
    { id:8, name: 'Plants', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ4wSmceQLMGZh5VRxiwiqqugpLxiG2BbcgDJqSzNWjdC3XRJ1ae3NmJ-AUF0Ea-lbzT184ZmHm1Q21hvSVE02ek6ZIkZAOCH4bGGca2vmGl19r8CgUn9KMNqpNuS9Pnekzg-6r9Q-PBEe8rQd35JDXeKEOfKc_AmcAnPBuz_JZRc1_3zR9wVhFAD2TRS6z_jrHnuyCf2OXt_GhrTfu6yqH5fwnN9tUhOuS2E8c6SodcGEl2A9Bz-ck52fFOeix5cxH_Q8ZgMSzo3y' },

  
  ];

  return (
    <section className="container mx-auto px-4 py-5">
      <div className="row row-cols-2 row-cols-sm-4 row-cols-lg-8 g-3">
        {categories.map((category) => (
          <div key={category.id} className="col">
            <Link
              to={`/products/${category.id}`}
              className="category-card d-block text-center text-decoration-none"
            >
              <div className="overflow-hidden rounded-lg">
                <div
                  className="ratio ratio-1x1"
                  style={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
              <p className="mt-2 text-sm fw-medium">{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;