export default function VoiceSupportSite() {
  const packages = [
    {
      title: "جلسة 20 دقيقة",
      duration: "20 دقيقة",
      price: "3 ريال",
      description: "جلسة صوتية قصيرة للفضفضة والدعم بلطف وهدوء.",
      whatsappLink:
        "https://api.whatsapp.com/send?phone=96896160109&text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%AC%D9%84%D8%B3%D8%A9%2020%20%D8%AF%D9%82%D9%8A%D9%82%D8%A9",
    },
    {
      title: "جلسة 45 دقيقة",
      duration: "45 دقيقة",
      price: "7 ريال",
      description: "جلسة أطول للتعمق في الحديث والراحة أكثر.",
      popular: true,
      whatsappLink:
        "https://api.whatsapp.com/send?phone=96896160109&text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%AC%D9%84%D8%B3%D8%A9%2040%20%D8%AF%D9%82%D9%8A%D9%82%D8%A9",
    },
  ];

  const features = [
    "جلسات صوتية فقط",
   "الرد خلال 5 دقائق",
    "خصوصية وسرية تامة",
    "حجز سهل وسريع",
  ];

  const steps = [
    {
      title: "اختار الجلسة المناسبة",
      text: "يمكنك اختيار الجلسة التي تناسب وقتك واحتياجك بسهولة.",
    },
    {
      title: "ارسل طلب الحجز",
      text: "بالضغط على زر الحجز سيتم فتح واتساب مباشرة برسالة جاهزة.",
    },
    {
      title: "ابدء الفضفضة",
      text: "مساحة آمنة تسمح لك بالكلام بحرية وبدون حكم.",
    },
  ];

  const mainWhatsappLink =
    "https://api.whatsapp.com/send?phone=96896160109&text=%D8%A3%D9%87%D9%84%D8%A7%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AC%D9%84%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D9%81%D8%B6%D9%81%D8%B6%D8%A9";

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-slate-700"
    >
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="transition duration-300 hover:scale-[1.02]">
            <p className="text-xl font-bold text-rose-500">مساحتك الهادئه</p>
            <p className="text-xs text-slate-500">مساحة آمنة 100% وسرية تامة بدون أي حكم</p>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a
              href="#about"
              className="transition duration-300 hover:-translate-y-0.5 hover:text-rose-500"
            >
              عن الخدمة
            </a>
            <a
              href="#features"
              className="transition duration-300 hover:-translate-y-0.5 hover:text-rose-500"
            >
              المميزات
            </a>
            <a
              href="#pricing"
              className="transition duration-300 hover:-translate-y-0.5 hover:text-rose-500"
            >
              الأسعار
            </a>
            <a
              href="#booking"
              className="transition duration-300 hover:-translate-y-0.5 hover:text-rose-500"
            >
              الحجز
            </a>
          </nav>

<div className="flex items-center gap-3">

<a
  href="https://www.instagram.com/w3_1as"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-500 transition duration-300 hover:bg-rose-50 hover:scale-[1.04]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 1.25a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5A3.5 3.5 0 1112 15a3.5 3.5 0 010-7z" />
  </svg>

  انستغرام
</a>

  <a
    href={mainWhatsappLink}
    target="_blank"
    rel="noreferrer"
    className="rounded-full bg-rose-400 px-5 py-2 text-sm font-semibold text-white shadow-sm transition duration-300 hover:scale-[1.04] hover:bg-rose-500"
  >
    احجز الان
  </a>

</div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-pink-200/40 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl" />

          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-rose-500 shadow-sm transition duration-300 hover:scale-[1.03] hover:shadow-md">
                🎧 دعم نفسي لطيف • صوتي • فردي
              </span>

              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold leading-tight text-slate-800 md:text-5xl">
                 أحيانًا ما نحتاج حل…
                  <br />
                 بس نحتاج أحد يسمعنا 💗
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-600">
                 لو حاس إن الكلام متراكم داخلك…
                وما لقيت أحد يسمعك بدون حكم أو مقاطعة،
                هنا مساحتك : هذه المساحة صُممت لك،
                عشان تتكلم براحتك وتخفف اللي داخلك 
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#pricing"
                  className="rounded-full bg-rose-400 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-rose-500"
                >
                  ابدء الآن
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-rose-200 bg-white px-6 py-3 font-semibold text-rose-500 transition duration-300 hover:-translate-y-1 hover:bg-rose-50"
                >
                  اعرف أكثر
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-2xl transition duration-300 hover:scale-110 hover:rotate-6">
                    💗
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">
                     جلسات فضفضة سرية
                    </p>
                    <p className="text-sm text-slate-500">استماع بكل حب</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-rose-50 p-4 transition duration-300 hover:shadow-md">
                    <p className="text-sm text-slate-500">الوصف</p>
                    <p className="mt-1 font-medium text-slate-700">
                      مساحة دافئة وهادئة تساعدك على التعبير عما بداخلك براحة.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-pink-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                      <p className="text-sm text-slate-500">نوع الجلسة</p>
                      <p className="mt-1 font-semibold text-slate-800">
                        صوتية 
                      </p>
                    </div>
                    <div className="rounded-2xl bg-pink-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                      <p className="text-sm text-slate-500">الخيارات</p>
                      <p className="mt-1 font-semibold text-slate-800">
                        20 أو 45 دقيقة
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600 transition duration-300 hover:shadow-md">
                    ملاحظة: هذه الخدمة للدعم النفسي المعنوي والفضفضة فقط، وليست
                    علاجًا نفسيًا أو تشخيصًا طبيًا.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-rose-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-3 text-sm font-semibold text-rose-500">
                عن الخدمة
              </p>
              <h2 className="mb-4 text-3xl font-bold text-slate-800">
               لو حاس إنك محتاج أحد يسمعك بدون ما يحكم عليك…
أنا هنا عشانك 💗
              </h2>
              <p className="leading-8 text-slate-600">
                أقدم جلسات فضفضة صوتية فردية للأشخاص الذين يحتاجون إلى مساحة آمنة
                للتعبير عن مشاعرهم وأفكارهم. يمكنك اختيار المدة المناسبة لك حسب
                احتياجك، سواء جلسة خفيفة وسريعة أو جلسة أطول تمنحك مساحة أكبر
                للحديث والراحة.
              </p>
            </div>

            <div
              id="features"
              className="rounded-[2rem] bg-rose-50 p-8 shadow-sm ring-1 ring-rose-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="mb-4 text-sm font-semibold text-rose-500">
                المميزات
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl bg-white p-4 font-medium text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:text-rose-500"
                  >
                    ✨ {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold text-rose-500">الأسعار</p>
            <h2 className="text-3xl font-bold text-slate-800">
              اختار الجلسة المناسبة لك
            </h2>
          </div>

          <div className="mx-auto max-w-md space-y-6">
            {packages.map((item) => (
              <div
                key={item.title}
                className={`relative rounded-[2rem] bg-white p-8 text-center ring-1 ring-rose-100 transition duration-300 ${
                  item.popular
                    ? "scale-[1.02] border-2 border-rose-300 shadow-2xl hover:scale-[1.04]"
                    : "shadow-lg hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 px-3 py-1 text-xs text-white shadow">
                    الأكثر طلبًا ⭐
                  </div>
                )}

                <p className="mb-2 text-sm font-semibold text-rose-500">
                  الخدمة الحالية
                </p>
                <h3 className="text-2xl font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
                <div className="my-6 rounded-[1.5rem] bg-rose-50 p-6 transition duration-300 hover:shadow-md">
                  <p className="text-4xl font-extrabold text-rose-500">
                    {item.price}
                  </p>
                  <p className="mt-2 text-slate-500">{item.duration}</p>
                </div>
                <a
                  href={item.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full bg-rose-400 px-8 py-3 font-semibold text-white shadow-sm transition duration-300 hover:scale-[1.04] hover:bg-rose-500"
                >
                 احجز الآن 💗
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="booking" className="mx-auto max-w-6xl px-6 py-10 pb-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-slate-800 p-8 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <p className="mb-3 text-sm font-semibold text-rose-300">
                الحجز
              </p>
              <h2 className="mb-4 text-3xl font-bold">ابدء جلستك بسهولة</h2>
              <p className="leading-8 text-slate-200">
                يمكنك اختيار الجلسة المناسبة لك من قسم الأسعار، ثم الضغط على زر
                الحجز ليتم فتح واتساب مباشرة برسالة جاهزة حسب الخدمة التي
                اخترتها.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-200">
                <p className="transition duration-300 hover:translate-x-1">
                  • الجلسات فردية وصوتية
                </p>
                <p className="transition duration-300 hover:translate-x-1">
                  • تتوفر جلسات 20 دقيقة و45 دقيقة
                </p>

                <p className="transition duration-300 hover:translate-x-1">
                  • هذه الخدمة للدعم المعنوي والفضفضة فقط
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-rose-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-5 text-2xl font-bold text-slate-800">
                احجز عبر واتساب
              </h3>
              <p className="mb-6 leading-7 text-slate-600">
                إذا كنت غير متأكد أي جلسة تناسبك، يمكنك التواصل أولًا للاستفسار،
                أو اختيار إحدى الباقات من قسم الأسعار مباشرة.
              </p>

              <a
                href={mainWhatsappLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-full bg-rose-400 px-6 py-4 text-center font-semibold text-white shadow-sm transition duration-300 hover:scale-[1.02] hover:bg-rose-500"
              >
                تواصل للاستفسار أو الحجز
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
