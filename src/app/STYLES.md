/* Tailwind base, components, utilities */
@tailwind base;
@tailwind components;
@tailwind utilities;


/* Body typography */
body {
  @apply font-secondary text-secondary;
}

/* Headings use primary font and primary color */
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-primary text-primary;
}

/* Custom heading sizes */
.h1 {
  @apply text-[40px] xl:text-[54px] uppercase font-black leading-[1.1];
}

.h2 {
  @apply text-[36px] leading-[1.3] xl:text-[46px] xl:leading-[56px] capitalize font-bold;
}

.h3 {
  @apply font-primary font-bold text-3xl;
}

.h4 {
  @apply text-2xl font-semibold;
}

/* Dark mode handled by Tailwind's 'dark:' variants */