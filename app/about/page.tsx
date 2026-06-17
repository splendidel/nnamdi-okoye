import type { Metadata } from 'next'
import Image from 'next/image'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'
import AboutImg from '@/public/images/hon-nnamdi-okoye-emmanuel.jpeg'
import Experience from '@/components/experience'

export const metadata: Metadata = {
  title: 'About - Nnamdi Okoye',
  description: 'Learn more about Hon. Nnamdi Emmanuel Okoye',
}

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-full">

          <section>
            { /* Page title */}
            <h1 className="h1 font-aspekta mb-5">Hi. I'm Hon.Nnamdi Emmanuel  Okoye (Ikenga) </h1>

              <div className="relative w-150 h-150 my-8">
              <Image className="rounded-full object-cover object-top" 
                          src={AboutImg} 
                          alt="hon-nnamdi-okoye-emmanuel" 
                          fill 
                          />
              </div>
            
            { /* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Bio</h2>
                <p>
                  Hon. Nnamdi Emmanuel Okoye is an entrepreneur, philanthropist, community advocate, and emerging political leader dedicated to advancing the development of Anambra Central Senatorial District and improving the lives of its people.
                </p>
                <p>
                  Born on April 16, 1994, in Nnewi, Anambra State, he hails from Idemili North Local Government Area and represents a new generation of leaders who combine youthful energy, global exposure, professional experience, and a deep commitment to public service.

                </p> 
                 <p>
                  As a successful businessman and founder of multiple ventures, Hon. Okoye has built a reputation for hard work, innovation, discipline, and integrity. His professional journey has taken him beyond Nigeria's borders, exposing him to global best practices in business, leadership, logistics, and economic development.
                </p> 
                <p>
                  A devoted family man, husband, and father, he remains firmly connected to the values that shaped him—service, fairness, accountability, and respect for humanity. He believes leadership is not about occupying positions of authority but about creating opportunities, solving problems, and improving the lives of others.
                </p>
                <p>
                  Today, Hon. Nnamdi Okoye seeks to bring his experience, passion, and commitment to service to the Nigerian Senate, where he hopes to champion policies and initiatives that promote economic growth, youth empowerment, quality education, healthcare access, security, and sustainable development throughout Anambra Central.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Early Life and Background</h2>
                <p>
                  Hon. Nnamdi Emmanuel Okoye was born into a family deeply rooted in discipline, service, and excellence. He is the fourth child in a family of five children and was raised by parents whose dedication to public service left a lasting impact on his 
                  <a className="font-medium text-sky-500 hover:underline" href="#0">character and worldview.</a>
                </p>
                <p>
                  His father, a retired Medical Doctor and civil servant, and his mother, a retired Director of Nursing Services, devoted their careers to improving the lives of others. Their commitment to integrity, professionalism, hard work, and service to  
                  <a className="font-medium text-sky-500 hover:underline" href="#0">humanity</a> became the foundation upon which he built his own life.
                </p>
                <p>
                  Growing up, <strong className="font-medium text-slate-800 dark:text-slate-100">Hon. Nnamdi Okoye</strong> experienced the guidance of a strict and principled father who instilled in him the values of discipline, accountability, perseverance, and respect for others. While he often describes himself as a stubborn child, he acknowledges that the firm upbringing provided by his parents played a significant role in shaping the person he has become today.
                </p>
                <p>
                  Coming from a humble but values-driven background, he learned early that success is achieved through hard work, education, determination, and unwavering integrity. These lessons continue to influence his leadership philosophy and his commitment to serving people selflessly.
                </p>

                <p>
                  Inspired by distinguished leaders such as Dr. Nnamdi Azikiwe, Kwame Nkrumah, Nelson Mandela, and his mentor Col. Sani Bello, Hon. Okoye firmly believes that leadership should be rooted in service rather than personal ambition. This belief forms the cornerstone of his vision for Anambra Central.
                </p>
              </div>
              
              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Let's Connect</h2>
                <p>
                  I'm excited to connect with others via <a className="font-medium text-sky-500 hover:underline" href="#0">email</a> and <a className="font-medium text-sky-500 hover:underline" href="#0">Twitter</a> to chat about projects and ideas. Currently, I'm not taking on freelance projects, but I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it's a good fit.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-60 lg:w-75 shrink-0">
        <div className="space-y-6">

          <WidgetNewsletter />
          <WidgetSponsor />

        </div>
      </aside>

    </div>
  )
}
