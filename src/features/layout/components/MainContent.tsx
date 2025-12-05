export const MainContent = () => {
  return (
    <div className='px-[1.375rem] tracking-[0.15px] pb-9'>
      <h1 className='font-montserrat font-semibold text-center text-[#005CAD] dark:text-highlighted text-[2.125rem] leading-[1.24] tracking-[0.25px] my-4'>
        Test Task: Mobile <br /> Header & Text Block
      </h1>

      <h2 className='text-[1rem] leading-[1.75] font-roboto font-bold text-center mb-4 dark:text-light'>
        Acceptance Criteria (AC)
      </h2>

      <div className='text-xl sm:text-base bg-transparent font-roboto leading-[1.5] dark:text-light'>
        <p>
          We want to evaluate your attention to UI details, component structure,
          and CSS skills. We <br /> are not testing complex global state
          management here.
        </p>

        <ol className='list-decimal pl-5'>
          <li>
            Layout & Responsiveness
            <ul className='list-disc pl-2 marker:text-xs'>
              <li>
                Design Compliance: Implement the Header and the main content
                block (text) strictly according to the design.
              </li>
              <li>
                Adaptability: The layout must be fully responsive. It should
                look perfect on mobile (320px+) and desktop without horizontal
                scrolling or broken elements.
              </li>
              <li>
                Header visually implement the header structure. Note: You do NOT
                need to implement the functional opening/closing logic of the
                burger menu. Just the visual icon and its positioning.
              </li>
            </ul>
          </li>

          <li>
            Interactions & Animations
            <ul className='list-disc pl-3 marker:text-xs'>
              <li>
                Theme Switcher Component:
                <ul className='list-disc pl-3 marker:text-xs'>
                  <li>Implement the custom UI for the Theme Switcher.</li>
                  <li>
                    The switcher must be interactive and feature a smooth
                    animation when toggled.
                  </li>
                  <li>
                    Clarification: You do not need to implement the actual
                    global color change for the whole page. We only want to see
                    a perfectly working, animated Switcher component.
                  </li>
                </ul>
              </li>
              <li>
                States: All buttons and links must have hover and active states
                as specified in the design.
              </li>
            </ul>
          </li>

          <li>
            Technical Stack
            <ul className='list-disc pl-3 marker:text-xs'>
              <li>Core: React, TypeScript.</li>
              <li>Styling: Tailwind CSS.</li>
              <li>Quality: Clean component structure and readable code.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  )
}
