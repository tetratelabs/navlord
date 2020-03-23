export const diagramData = [
  {
    diagramid: "L0-A",
    title: "Level 0 - Overall View",
    overview: "",
    objects: [
      {
        diagid: "L0-A",
        nodeid: 1,
        nodetype: "Architectural Plane",
        caption: "TSB Management Plane",
        overview: "",
        tags: "skwalking;apache-skywalking;network;microservices;cloudnative"
      },
      {
        diagid: "L0-A",
        nodeid: 2,
        nodetype: "Architectural Plane",
        caption: "Istio Control Plane",
        overview: "",
        tags:
          "istio;service-mesh;skywalking;apache-skyalking;telemetry;ngac;security;grpc;authn;authz",
        infotypes: [
          {
            infotype: "Whitepaper",
            info: [
              {
                infotype: "Whitepaper",
                infoid: "2",
                title:
                  "Special Publication: Building Secure Microservices-Based Applications Using Service-Mesh Architecture",
                subgenre: "Special Publication",
                overview:
                  "A Service Mesh is the only option for addressing a number of security requirements in service to service interactions in the modernized world of microservices and cloud-based applications, according to a NIST Special Publication that was released today. NIST Computer Scientist Ramaswamy Chandramouli and Tetrate Founding Engineer Zack Butcher co-authored the …",
                tags: "editorial;security;service-mesh",
                url: "https://www.tetrate.io/blog/sp/"
              },
              {
                infotype: "Events",
                infoid: "6",
                title: "Istio Dominated at KubeCon San Diego",
                subgenre: "Event Summary",
                overview:
                  "A crowd of 12,000 attended KubeCon San Diego this November, looking to the cloud native skies for the IT forecast. Temperature takers couldn’t fail to notice the maturation of service mesh technologies and the rise of Istio, the open source project that has now moved into production and is operating at scale. Only a year ago, KubeCon attendees in Seattle …",
                tags: "event;kubecon;cloudnative;istio",
                url: "https://www.tetrate.io/blog/istiokubecon/"
              },
              {
                infotype: "Events",
                infoid: "9",
                title: "Tetrate at KubeCon San Diego",
                subgenre: "Event Summary",
                overview:
                  "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                tags: "event;istio;envoy;kubecon",
                url: "https://www.tetrate.io/blog/kubeconsd/"
              },
              {
                infotype: "Events",
                infoid: "41",
                title:
                  "Join Tetrate at Service Mesh Day 2019 in San Francisco - the First-Ever Service Mesh Industry Conference",
                subgenre: "Service Mesh Day",
                overview:
                  "Last week was a tremendous week for Tetrate as we officially launched with $12.5M in funding led by Dell Technologies Capital with participation from Intel Capital, Samsung NEXT, 8VC and Rain Capital. Our vision as a company is not only to provide best-in-breed service mesh technology to manage microservices in a cloud-native world, but to share the vast …",
                tags:
                  "company-news;cloudnative;microservices;event;service-mesh",
                url:
                  "https://www.tetrate.io/blog/join-tetrate-at-service-mesh-day-2019-in-san-francisco-the-first-ever-service-mesh-industry-conference/"
              },
              {
                infotype: "Talk Videos",
                infoid: "12",
                title: "Venil Noronha (VMware) Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: All right. Thanks for joining me in this talk. My name is Venil Noronha and I worked with the VMware open source technology center. Um, I have a fun job that is to contribute upstream to Istio and Envoy full time. Today we’ll have a look at rest API in some problems associated with rest APIs and how gRPC solves these problems. And finally …",
                tags: "grpc;event;talk-videos",
                url:
                  "https://www.tetrate.io/blog/smd_venil_noronha_from_vmware/"
              },
              {
                infotype: "Talk Videos",
                infoid: "13",
                title:
                  "Cameron Moreau and Tian Wang at Tetrate's Service Mesh Day 2019: All for Auth & Auth for All: Bringing End User Identity to the Service Mesh",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "Cameron Moreau and Tian Wang from Pivotal spoke at Tetrate’s inaugural Service Mesh Day 2019 in San Francisco on the workings, pain points, and future of auth. Moreau opened with a description of today’s “gruesome world of auth,” wherein a hapless app developer, tasked to bring auth to the apps they’re building for enterprise, is overwhelmed with complex, …",
                tags: "talk-videos;event;service-mesh;authn;authz",
                url: "https://www.tetrate.io/blog/smd_cameron_and_tian/"
              },
              {
                infotype: "Talk Videos",
                infoid: "14",
                title:
                  "Unpacking Next Generation Access Control (NGAC) and Tetrate Q",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "David Ferraiolo of NIST and Tetrate’s Ignasi Barrera presented on Next Generation Access Control at Tetrate’s Service Mesh Day 2019 in San Francisco. Ferraiolo gave an in-depth presentation on Next Generation Access Control (NGAC), an ANSI/INCITS standard that boldly goes where no RBAC or ABAC has gone before. NGAC enables diverse access control …",
                tags: "talk-videos;event;security;ngac",
                url:
                  "https://www.tetrate.io/blog/smd_david_ferraiolo_and_ignasi/"
              },
              {
                infotype: "Talk Videos",
                infoid: "16",
                title:
                  "Lee Calcote at Tetrate's Service Mesh Day 2019: Service Meshes, but at What Cost?",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "Service mesh: Where do I get started? And what’s the overhead? Speaking at service mesh workshops over the past year, these are the two questions that Lee Calcote, senior director of technology strategy at SolarWinds, heard over and over again. How much latency are we talking about? What’s the CPU burn based on all this value I’m getting for free, with …",
                tags: "talk-videos;event;service-mesh",
                url: "https://www.tetrate.io/blog/smd_lee_calcote/"
              },
              {
                infotype: "Talk Videos",
                infoid: "20",
                title: "CISO Panel Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: Matt Klein Okay. Sure. Cool. So this is a end user panel. So while I read the questions that I was just sent aa, I’m going to let everyone introduce themselves. Okay, great. Okay. Uh, yeah. Hi, I’m snow. I work with square on their traffic and observability team, uh, been working on building out, um, are migrating us towards using an …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_end_user_panel/"
              },
              {
                infotype: "Talk Videos",
                infoid: "21",
                title: "CISO Panel Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: Deepak Jeevan Hi everybody. Thank you for spending lunchtime with us, humble CISOs. Uh, so we changed the analysts VC panel that’s in the printed sheet to a CISO panel. Thought it will be more interesting to, for all of you to hear from how chief security information officers, chief information security officers of different companies, uh, …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_panel_ciso/"
              },
              {
                infotype: "Talk Videos",
                infoid: "24",
                title: "Frederick Kautz (Doc.ai) Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: So, uh, let me start with a, so we have this project, it’s called Network Service Mesh, uh, you’ll understand why it’s called this in a moment. So, uh, first let’s start with a short story though. So we have this character named Sarah and I actually use this for most of my introductions cause it helps, uh, provide a really …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_frederick_kautz/"
              },
              {
                infotype: "Talk Videos",
                infoid: "25",
                title:
                  "Janna Brummel Robin van Zijll ING Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: Hi, welcome to our talk. Last ones before lunch. That’s always a bit of a challenge. Uh, our talk is a little bit different than the others. Um, we’re introducing service mesh in our organization working on a POC, so not in production yet. And we’re doing that at the same time as introducing, uh, the public cloud. And we want to …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_janna_and_robin/"
              },
              {
                infotype: "Talk Videos",
                infoid: "28",
                title: "Prajakta Joshi (Google) and Dhi",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: PRAJAKTA JOSHI: So Hi folks. It’s really great to be here. I’m Prajakta, I’m a Product Manager in cloud networking in Google Cloud. And I want to invite Dhi to introduce himself. DHI AURRAHMAN: Okay. So, hi. Hi folks. My name is Dhi, I’m a Software Engineer at Tetrate. I’m an Envoy maintainer. JOSHI: Perfect. So a lot …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_prajakta_joshi_dhi/"
              },
              {
                infotype: "Talk Videos",
                infoid: "29",
                title: "Shriram Rajagopalan (Tetrate) Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: So you’ve seen AWS App Mesh presentation and in the afternoon you’ll actually see a presentation from the traffic director folks at Google and so on. All of these are basically, you know, manifestations of how you would deploy a service mesh across a heterogeneous environment, spanning virtual machines, your Kubernetes clusters or ECS, …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_shriram/"
              },
              {
                infotype: "Talk Videos",
                infoid: "30",
                title: "The 5 traits of successful service mesh adopters",
                subgenre: "Talk Summary",
                overview:
                  "Tetrate’s Zack Butcher gave a whirlwind session, a “Practical Guide to Istio,” at DockerCon in San Francisco last week, with one of the 5 top-rated talks at the conference. He pointed to 5 traits of successful service mesh adopters. #1. They’re focused on a single pain point. A mesh is just too big to adopt wholesale from day one. Service mesh is a tool, not …",
                tags: "service-mesh",
                url: "https://www.tetrate.io/blog/5-traits/"
              },
              {
                infotype: "Talk Videos",
                infoid: "31",
                title:
                  "Three Myths about Service Mesh: Service Mesh Day Remarks from Tetrate CEO Varun Talwar",
                subgenre: "Service Mesh Day / Talk Summary",
                overview:
                  "Tetrate CEO Varun Talwar kicked off Service Mesh Day, the first ever industry conference on service mesh, with a few words about what had brought the standing-room-only crowd, from a variety of organizations and industries, together. From the 10,000-foot view, compute density is growing. Users need more compute, network and storage capacity. The shift to …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_varun_talwar/"
              },
              {
                infotype: "Talk Videos",
                infoid: "51",
                title: "Future of service mesh",
                subgenre: "Talk Transcript/Summary",
                overview:
                  "Transcript: Chris Aniszczyk Uh, let’s try to stick on time and get started. So my name is Chris Chris Aniszczyk. I have the fun job of running the cloud native computing foundation and today we’re chatting with a bunch of folks about the future of service mesh. So, uh, to get started, why don’t we do some quick introductions on the panel and …",
                tags: "talk-videos;service-mesh",
                url:
                  "https://www.tetrate.io/blog/smd_future_of_servicemesh_panel/"
              },
              {
                infotype: "Talk Videos",
                infoid: "52",
                title: "Matt Klein at Service Mesh Day",
                subgenre: "",
                overview:
                  "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                tags: "event;talk-videos;service-mesh;envoy",
                url:
                  "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "53",
                title: "Chris Aniszczyk at Service Mesh Day",
                subgenre: "",
                overview:
                  "As companies adopt Kubernetes and reevaluate their architectures, Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation predicts they'll look increasingly to mesh to provide observability.",
                tags: "event;talk-videos;kubernetes;cncf;service-mesh",
                url:
                  "https://www.youtube.com/watch?v=9O9im_nLcQQ&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "54",
                title: "Suresh Visvanathan at Service Mesh Day",
                subgenre: "",
                overview:
                  "Suresh describes how Verizon media has been using service mesh to secure traffic flow with MTLS without code changes, distribute tracing to troubleshoot, and more.",
                tags: "event;talk-videos;service-mesh",
                url:
                  "https://www.youtube.com/watch?v=sa8R9PD7coc&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "55",
                title: "David Ferraiolo at Service Mesh Day",
                subgenre: "",
                overview:
                  "David of NIST walks through Next Generation Access Control (NGAC), a new approach to delegating and querying access privileges with fine-grained policies.",
                tags: "event;talk-videos;nist;ngac",
                url: "https://www.youtube.com/watch?v=DcpfxYWwAOE"
              },
              {
                infotype: "Talk Videos",
                infoid: "56",
                title: "Louis Ryan at Service Mesh Day",
                subgenre: "",
                overview:
                  "Louis Ryan of Google explains how service mesh delivers flexibility and control to app developers and administrators and operators abstracting the network's control plane and enabling the enterprise.",
                tags: "event;talk-videos;service-mesh;network",
                url:
                  "https://www.youtube.com/watch?v=Rr3Ftm4p6nc&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "57",
                title: "Larry Peterson at Service Mesh Day",
                subgenre: "",
                overview:
                  "Larry Peterson of ONFtalks about federating service meshes and the challenges ahead for building next generation applications.",
                tags: "event;talk-videos;service-mesh",
                url:
                  "https://www.youtube.com/watch?v=mazZvoxxm1w&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "59",
                title: "An Overview of Istio Mesh",
                subgenre: "",
                overview:
                  "Istio: Weaving the Service Mesh. By Shriram Rajagopalan & Louis Ryan",
                tags: "event;talk-videos;service-mesh;istio",
                url: "https://www.youtube.com/watch?v=WFEllbmRI8U&t=1s"
              },
              {
                infotype: "Talk Videos",
                infoid: "60",
                title: "Debugging Istio Networking",
                subgenre: "",
                overview:
                  "Liam White explains how to debug Istio to test reliability and functions of Istio components.",
                tags: "event;talk-videos;istio",
                url:
                  "https://www.youtube.com/watch?v=K2mM3c11WN4&feature=youtu.be&t=4139"
              },
              {
                infotype: "Talk Videos",
                infoid: "61",
                title: "Connecting, Managing, Observing, and Securing Services",
                subgenre: "",
                overview:
                  "Zack Butcher talks about how a service mesh helps with the transition from monoliths to microservices to empower the organization.",
                tags: "event;talk-videos;miroservices;service-mesh",
                url:
                  "https://www.infoq.com/presentations/service-mesh-microservices-2018/"
              },
              {
                infotype: "Talk Videos",
                infoid: "62",
                title: "GitOps for Istio",
                subgenre: "",
                overview:
                  "Learn how to manage Istio config like managing code. Varun Talwar's Kubecon Europe 2018 talk.",
                tags: "event;talk-videos;istio;kubecon",
                url: "https://www.youtube.com/watch?v=VkKMf23ZokY"
              },
              {
                infotype: "Talk Videos",
                infoid: "63",
                title: "Latency Analysis with Istio & OpenCensus",
                subgenre: "",
                overview:
                  "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                tags: "event;talk-videos;microservices;istio;envoy",
                url:
                  "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "64",
                title: "Istio - The Packet's-Eye View",
                subgenre: "",
                overview:
                  "A practical introduction to the operation of Istio and how it can impact your environment. Kubecon Seattle 2018 talk.",
                tags: "event;talk-videos;kubecon;istio",
                url:
                  "https://www.youtube.com/watch?v=zJnYuFsLHfY&feature=youtu.be"
              },
              {
                infotype: "Podcasts",
                infoid: "5",
                title: "Louis Ryan & Varun Talwar Podcast",
                subgenre: "Podcast Summary",
                overview:
                  "The co-creators of Istio– Louis Ryan of Google and Tetrate’s Varun Talwar– talk with TC Currie on the history of Istio, how it came to exist in its current form and the collaboration between Google, IBM and Lyft that got the project off the ground. They address how the project was designed to allow businesses to solve observability issues, …",
                tags: "podcast;istio",
                url: "https://www.tetrate.io/blog/podcast_louis_and_varun/"
              }
            ]
          },
          {
            infotype: "Events",
            info: []
          },
          {
            infotype: "Talk Videos",
            info: []
          },
          {
            infotype: "Podcasts",
            info: []
          }
        ]
      },
      {
        diagid: "L0-A",
        nodeid: 3,
        nodetype: "Architectural Plane",
        caption: "Envoy Data Plane",
        overview: "",
        tags: "envoy;getenvoy;kubernetes;multi-cluster;aws",
        infotypes: [
          {
            infotype: "Events",
            info: [
              {
                infotype: "Events",
                infoid: "9",
                title: "Tetrate at KubeCon San Diego",
                subgenre: "Event Summary",
                overview:
                  "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                tags: "event;istio;envoy;kubecon",
                url: "https://www.tetrate.io/blog/kubeconsd/"
              },
              {
                infotype: "Talk Videos",
                infoid: "27",
                title:
                  "Matt Klein at Tetrate's Service Mesh Day 2019: Envoy as the standard data plane and where it's going",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "Matt Klein, the creator of Envoy, says he had greatly underestimated the market demand for a proxy that could be used in a generic way. The Lyft software engineer wrote Envoy as a “communication bus” to handle issues like rate limiting, circuit breaking, and load balancing. It facilitates network-transparent applications and allows developers to focus on …",
                tags: "event;alk-videos;envoy",
                url: "https://www.tetrate.io/blog/smd_matt_klein/"
              },
              {
                infotype: "Talk Videos",
                infoid: "52",
                title: "Matt Klein at Service Mesh Day",
                subgenre: "",
                overview:
                  "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                tags: "event;talk-videos;service-mesh;envoy",
                url:
                  "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "53",
                title: "Chris Aniszczyk at Service Mesh Day",
                subgenre: "",
                overview:
                  "As companies adopt Kubernetes and reevaluate their architectures, Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation predicts they'll look increasingly to mesh to provide observability.",
                tags: "event;talk-videos;kubernetes;cncf;service-mesh",
                url:
                  "https://www.youtube.com/watch?v=9O9im_nLcQQ&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "63",
                title: "Latency Analysis with Istio & OpenCensus",
                subgenre: "",
                overview:
                  "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                tags: "event;talk-videos;microservices;istio;envoy",
                url:
                  "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
              }
            ]
          },
          {
            infotype: "Talk Videos",
            info: []
          }
        ]
      },
      {
        diagid: "L0-A",
        nodeid: 4,
        nodetype: "Deep Dive",
        caption: "...    (Management Plane Deep Dive)",
        overview: "",
        tags: "skwalking;apache-skywalking;network;microservices;cloudnative",
        infotypes: [
          {
            infotype: "Events",
            info: [
              {
                infotype: "Events",
                infoid: "6",
                title: "Istio Dominated at KubeCon San Diego",
                subgenre: "Event Summary",
                overview:
                  "A crowd of 12,000 attended KubeCon San Diego this November, looking to the cloud native skies for the IT forecast. Temperature takers couldn’t fail to notice the maturation of service mesh technologies and the rise of Istio, the open source project that has now moved into production and is operating at scale. Only a year ago, KubeCon attendees in Seattle …",
                tags: "event;kubecon;cloudnative;istio",
                url: "https://www.tetrate.io/blog/istiokubecon/"
              },
              {
                infotype: "Events",
                infoid: "33",
                title: "More About Service Mesh Day",
                subgenre: "Service Mesh Day",
                overview:
                  "Tetrate was proud to host over 260 attendees at Service Mesh Day 2019. Attendees and speakers hailed from a variety of industries but as a group agreed that microservices are now a fundamental piece of enterprise software. As microservices gain traction in the cloud, developers are looking for tools to help manage and secure these services at scale. Matt …",
                tags: "event;microservices",
                url: "https://www.tetrate.io/blog/more-about-service-mesh-day/"
              },
              {
                infotype: "Events",
                infoid: "41",
                title:
                  "Join Tetrate at Service Mesh Day 2019 in San Francisco - the First-Ever Service Mesh Industry Conference",
                subgenre: "Service Mesh Day",
                overview:
                  "Last week was a tremendous week for Tetrate as we officially launched with $12.5M in funding led by Dell Technologies Capital with participation from Intel Capital, Samsung NEXT, 8VC and Rain Capital. Our vision as a company is not only to provide best-in-breed service mesh technology to manage microservices in a cloud-native world, but to share the vast …",
                tags:
                  "company-news;cloudnative;microservices;event;service-mesh",
                url:
                  "https://www.tetrate.io/blog/join-tetrate-at-service-mesh-day-2019-in-san-francisco-the-first-ever-service-mesh-industry-conference/"
              },
              {
                infotype: "Talk Videos",
                infoid: "19",
                title:
                  "Larry Peterson at Tetrate's Service Mesh Day 2019: A History of Networking and What’s Next",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "At Tetrate’s Service Mesh Day, ONF CTO Larry Peterson illustrated his session on the history and future of networking with a diagram depicting the evolution of the “narrow waist of the internet.” Peterson’s full slide deck We’ve come far from the minimalism Peterson shared in the form of the IP protocol datagram created around 1980– a historical …",
                tags: "event;talk-videos;network",
                url: "https://www.tetrate.io/blog/smd_larry_peterson/"
              },
              {
                infotype: "Talk Videos",
                infoid: "22",
                title:
                  "Chris Aniszczyk at Tetrate's Service Mesh Day 2019: The CNCF Perspective",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "“Service mesh is going to go through this wonderful phase of growth,” said Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation (CNCF). As companies adopt Kubernetes, break apart their monoliths and start to modernize, they begin to look for solutions to traffic management and they need to observe their systems at another level. That’s where …",
                tags: "event;talk-videos;network;cncf",
                url: "https://www.tetrate.io/blog/smd_chris_aniszczyk/"
              },
              {
                infotype: "Talk Videos",
                infoid: "56",
                title: "Louis Ryan at Service Mesh Day",
                subgenre: "",
                overview:
                  "Louis Ryan of Google explains how service mesh delivers flexibility and control to app developers and administrators and operators abstracting the network's control plane and enabling the enterprise.",
                tags: "event;talk-videos;service-mesh;network",
                url:
                  "https://www.youtube.com/watch?v=Rr3Ftm4p6nc&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "63",
                title: "Latency Analysis with Istio & OpenCensus",
                subgenre: "",
                overview:
                  "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                tags: "event;talk-videos;microservices;istio;envoy",
                url:
                  "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
              }
            ]
          },
          {
            infotype: "Talk Videos",
            info: []
          }
        ]
      },
      {
        diagid: "L0-A",
        nodeid: 5,
        nodetype: "Deep Dive",
        caption: "...    (Control Plane Deep Dive) ",
        overview: "",
        tags:
          "istio;service-mesh;skywalking;apache-skyalking;telemetry;ngac;security;grpc;authn;authz",
        infotypes: [
          {
            infotype: "Whitepaper",
            info: [
              {
                infotype: "Whitepaper",
                infoid: "2",
                title:
                  "Special Publication: Building Secure Microservices-Based Applications Using Service-Mesh Architecture",
                subgenre: "Special Publication",
                overview:
                  "A Service Mesh is the only option for addressing a number of security requirements in service to service interactions in the modernized world of microservices and cloud-based applications, according to a NIST Special Publication that was released today. NIST Computer Scientist Ramaswamy Chandramouli and Tetrate Founding Engineer Zack Butcher co-authored the …",
                tags: "editorial;security;service-mesh",
                url: "https://www.tetrate.io/blog/sp/"
              },
              {
                infotype: "Events",
                infoid: "6",
                title: "Istio Dominated at KubeCon San Diego",
                subgenre: "Event Summary",
                overview:
                  "A crowd of 12,000 attended KubeCon San Diego this November, looking to the cloud native skies for the IT forecast. Temperature takers couldn’t fail to notice the maturation of service mesh technologies and the rise of Istio, the open source project that has now moved into production and is operating at scale. Only a year ago, KubeCon attendees in Seattle …",
                tags: "event;kubecon;cloudnative;istio",
                url: "https://www.tetrate.io/blog/istiokubecon/"
              },
              {
                infotype: "Events",
                infoid: "9",
                title: "Tetrate at KubeCon San Diego",
                subgenre: "Event Summary",
                overview:
                  "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                tags: "event;istio;envoy;kubecon",
                url: "https://www.tetrate.io/blog/kubeconsd/"
              },
              {
                infotype: "Events",
                infoid: "41",
                title:
                  "Join Tetrate at Service Mesh Day 2019 in San Francisco - the First-Ever Service Mesh Industry Conference",
                subgenre: "Service Mesh Day",
                overview:
                  "Last week was a tremendous week for Tetrate as we officially launched with $12.5M in funding led by Dell Technologies Capital with participation from Intel Capital, Samsung NEXT, 8VC and Rain Capital. Our vision as a company is not only to provide best-in-breed service mesh technology to manage microservices in a cloud-native world, but to share the vast …",
                tags:
                  "company-news;cloudnative;microservices;event;service-mesh",
                url:
                  "https://www.tetrate.io/blog/join-tetrate-at-service-mesh-day-2019-in-san-francisco-the-first-ever-service-mesh-industry-conference/"
              },
              {
                infotype: "Talk Videos",
                infoid: "12",
                title: "Venil Noronha (VMware) Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: All right. Thanks for joining me in this talk. My name is Venil Noronha and I worked with the VMware open source technology center. Um, I have a fun job that is to contribute upstream to Istio and Envoy full time. Today we’ll have a look at rest API in some problems associated with rest APIs and how gRPC solves these problems. And finally …",
                tags: "grpc;event;talk-videos",
                url:
                  "https://www.tetrate.io/blog/smd_venil_noronha_from_vmware/"
              },
              {
                infotype: "Talk Videos",
                infoid: "13",
                title:
                  "Cameron Moreau and Tian Wang at Tetrate's Service Mesh Day 2019: All for Auth & Auth for All: Bringing End User Identity to the Service Mesh",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "Cameron Moreau and Tian Wang from Pivotal spoke at Tetrate’s inaugural Service Mesh Day 2019 in San Francisco on the workings, pain points, and future of auth. Moreau opened with a description of today’s “gruesome world of auth,” wherein a hapless app developer, tasked to bring auth to the apps they’re building for enterprise, is overwhelmed with complex, …",
                tags: "talk-videos;event;service-mesh;authn;authz",
                url: "https://www.tetrate.io/blog/smd_cameron_and_tian/"
              },
              {
                infotype: "Talk Videos",
                infoid: "14",
                title:
                  "Unpacking Next Generation Access Control (NGAC) and Tetrate Q",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "David Ferraiolo of NIST and Tetrate’s Ignasi Barrera presented on Next Generation Access Control at Tetrate’s Service Mesh Day 2019 in San Francisco. Ferraiolo gave an in-depth presentation on Next Generation Access Control (NGAC), an ANSI/INCITS standard that boldly goes where no RBAC or ABAC has gone before. NGAC enables diverse access control …",
                tags: "talk-videos;event;security;ngac",
                url:
                  "https://www.tetrate.io/blog/smd_david_ferraiolo_and_ignasi/"
              },
              {
                infotype: "Talk Videos",
                infoid: "16",
                title:
                  "Lee Calcote at Tetrate's Service Mesh Day 2019: Service Meshes, but at What Cost?",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "Service mesh: Where do I get started? And what’s the overhead? Speaking at service mesh workshops over the past year, these are the two questions that Lee Calcote, senior director of technology strategy at SolarWinds, heard over and over again. How much latency are we talking about? What’s the CPU burn based on all this value I’m getting for free, with …",
                tags: "talk-videos;event;service-mesh",
                url: "https://www.tetrate.io/blog/smd_lee_calcote/"
              },
              {
                infotype: "Talk Videos",
                infoid: "20",
                title: "CISO Panel Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: Matt Klein Okay. Sure. Cool. So this is a end user panel. So while I read the questions that I was just sent aa, I’m going to let everyone introduce themselves. Okay, great. Okay. Uh, yeah. Hi, I’m snow. I work with square on their traffic and observability team, uh, been working on building out, um, are migrating us towards using an …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_end_user_panel/"
              },
              {
                infotype: "Talk Videos",
                infoid: "21",
                title: "CISO Panel Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: Deepak Jeevan Hi everybody. Thank you for spending lunchtime with us, humble CISOs. Uh, so we changed the analysts VC panel that’s in the printed sheet to a CISO panel. Thought it will be more interesting to, for all of you to hear from how chief security information officers, chief information security officers of different companies, uh, …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_panel_ciso/"
              },
              {
                infotype: "Talk Videos",
                infoid: "24",
                title: "Frederick Kautz (Doc.ai) Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: So, uh, let me start with a, so we have this project, it’s called Network Service Mesh, uh, you’ll understand why it’s called this in a moment. So, uh, first let’s start with a short story though. So we have this character named Sarah and I actually use this for most of my introductions cause it helps, uh, provide a really …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_frederick_kautz/"
              },
              {
                infotype: "Talk Videos",
                infoid: "25",
                title:
                  "Janna Brummel Robin van Zijll ING Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: Hi, welcome to our talk. Last ones before lunch. That’s always a bit of a challenge. Uh, our talk is a little bit different than the others. Um, we’re introducing service mesh in our organization working on a POC, so not in production yet. And we’re doing that at the same time as introducing, uh, the public cloud. And we want to …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_janna_and_robin/"
              },
              {
                infotype: "Talk Videos",
                infoid: "28",
                title: "Prajakta Joshi (Google) and Dhi",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: PRAJAKTA JOSHI: So Hi folks. It’s really great to be here. I’m Prajakta, I’m a Product Manager in cloud networking in Google Cloud. And I want to invite Dhi to introduce himself. DHI AURRAHMAN: Okay. So, hi. Hi folks. My name is Dhi, I’m a Software Engineer at Tetrate. I’m an Envoy maintainer. JOSHI: Perfect. So a lot …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_prajakta_joshi_dhi/"
              },
              {
                infotype: "Talk Videos",
                infoid: "29",
                title: "Shriram Rajagopalan (Tetrate) Service Mesh Day 2019",
                subgenre: "Service Mesh Day/ Talk Transcripts",
                overview:
                  "Transcript: So you’ve seen AWS App Mesh presentation and in the afternoon you’ll actually see a presentation from the traffic director folks at Google and so on. All of these are basically, you know, manifestations of how you would deploy a service mesh across a heterogeneous environment, spanning virtual machines, your Kubernetes clusters or ECS, …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_shriram/"
              },
              {
                infotype: "Talk Videos",
                infoid: "30",
                title: "The 5 traits of successful service mesh adopters",
                subgenre: "Talk Summary",
                overview:
                  "Tetrate’s Zack Butcher gave a whirlwind session, a “Practical Guide to Istio,” at DockerCon in San Francisco last week, with one of the 5 top-rated talks at the conference. He pointed to 5 traits of successful service mesh adopters. #1. They’re focused on a single pain point. A mesh is just too big to adopt wholesale from day one. Service mesh is a tool, not …",
                tags: "service-mesh",
                url: "https://www.tetrate.io/blog/5-traits/"
              },
              {
                infotype: "Talk Videos",
                infoid: "31",
                title:
                  "Three Myths about Service Mesh: Service Mesh Day Remarks from Tetrate CEO Varun Talwar",
                subgenre: "Service Mesh Day / Talk Summary",
                overview:
                  "Tetrate CEO Varun Talwar kicked off Service Mesh Day, the first ever industry conference on service mesh, with a few words about what had brought the standing-room-only crowd, from a variety of organizations and industries, together. From the 10,000-foot view, compute density is growing. Users need more compute, network and storage capacity. The shift to …",
                tags: "event;talk-videos;service-mesh",
                url: "https://www.tetrate.io/blog/smd_varun_talwar/"
              },
              {
                infotype: "Talk Videos",
                infoid: "51",
                title: "Future of service mesh",
                subgenre: "Talk Transcript/Summary",
                overview:
                  "Transcript: Chris Aniszczyk Uh, let’s try to stick on time and get started. So my name is Chris Chris Aniszczyk. I have the fun job of running the cloud native computing foundation and today we’re chatting with a bunch of folks about the future of service mesh. So, uh, to get started, why don’t we do some quick introductions on the panel and …",
                tags: "talk-videos;service-mesh",
                url:
                  "https://www.tetrate.io/blog/smd_future_of_servicemesh_panel/"
              },
              {
                infotype: "Talk Videos",
                infoid: "52",
                title: "Matt Klein at Service Mesh Day",
                subgenre: "",
                overview:
                  "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                tags: "event;talk-videos;service-mesh;envoy",
                url:
                  "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "53",
                title: "Chris Aniszczyk at Service Mesh Day",
                subgenre: "",
                overview:
                  "As companies adopt Kubernetes and reevaluate their architectures, Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation predicts they'll look increasingly to mesh to provide observability.",
                tags: "event;talk-videos;kubernetes;cncf;service-mesh",
                url:
                  "https://www.youtube.com/watch?v=9O9im_nLcQQ&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "54",
                title: "Suresh Visvanathan at Service Mesh Day",
                subgenre: "",
                overview:
                  "Suresh describes how Verizon media has been using service mesh to secure traffic flow with MTLS without code changes, distribute tracing to troubleshoot, and more.",
                tags: "event;talk-videos;service-mesh",
                url:
                  "https://www.youtube.com/watch?v=sa8R9PD7coc&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "55",
                title: "David Ferraiolo at Service Mesh Day",
                subgenre: "",
                overview:
                  "David of NIST walks through Next Generation Access Control (NGAC), a new approach to delegating and querying access privileges with fine-grained policies.",
                tags: "event;talk-videos;nist;ngac",
                url: "https://www.youtube.com/watch?v=DcpfxYWwAOE"
              },
              {
                infotype: "Talk Videos",
                infoid: "56",
                title: "Louis Ryan at Service Mesh Day",
                subgenre: "",
                overview:
                  "Louis Ryan of Google explains how service mesh delivers flexibility and control to app developers and administrators and operators abstracting the network's control plane and enabling the enterprise.",
                tags: "event;talk-videos;service-mesh;network",
                url:
                  "https://www.youtube.com/watch?v=Rr3Ftm4p6nc&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "57",
                title: "Larry Peterson at Service Mesh Day",
                subgenre: "",
                overview:
                  "Larry Peterson of ONFtalks about federating service meshes and the challenges ahead for building next generation applications.",
                tags: "event;talk-videos;service-mesh",
                url:
                  "https://www.youtube.com/watch?v=mazZvoxxm1w&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "59",
                title: "An Overview of Istio Mesh",
                subgenre: "",
                overview:
                  "Istio: Weaving the Service Mesh. By Shriram Rajagopalan & Louis Ryan",
                tags: "event;talk-videos;service-mesh;istio",
                url: "https://www.youtube.com/watch?v=WFEllbmRI8U&t=1s"
              },
              {
                infotype: "Talk Videos",
                infoid: "60",
                title: "Debugging Istio Networking",
                subgenre: "",
                overview:
                  "Liam White explains how to debug Istio to test reliability and functions of Istio components.",
                tags: "event;talk-videos;istio",
                url:
                  "https://www.youtube.com/watch?v=K2mM3c11WN4&feature=youtu.be&t=4139"
              },
              {
                infotype: "Talk Videos",
                infoid: "61",
                title: "Connecting, Managing, Observing, and Securing Services",
                subgenre: "",
                overview:
                  "Zack Butcher talks about how a service mesh helps with the transition from monoliths to microservices to empower the organization.",
                tags: "event;talk-videos;miroservices;service-mesh",
                url:
                  "https://www.infoq.com/presentations/service-mesh-microservices-2018/"
              },
              {
                infotype: "Talk Videos",
                infoid: "62",
                title: "GitOps for Istio",
                subgenre: "",
                overview:
                  "Learn how to manage Istio config like managing code. Varun Talwar's Kubecon Europe 2018 talk.",
                tags: "event;talk-videos;istio;kubecon",
                url: "https://www.youtube.com/watch?v=VkKMf23ZokY"
              },
              {
                infotype: "Talk Videos",
                infoid: "63",
                title: "Latency Analysis with Istio & OpenCensus",
                subgenre: "",
                overview:
                  "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                tags: "event;talk-videos;microservices;istio;envoy",
                url:
                  "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "64",
                title: "Istio - The Packet's-Eye View",
                subgenre: "",
                overview:
                  "A practical introduction to the operation of Istio and how it can impact your environment. Kubecon Seattle 2018 talk.",
                tags: "event;talk-videos;kubecon;istio",
                url:
                  "https://www.youtube.com/watch?v=zJnYuFsLHfY&feature=youtu.be"
              },
              {
                infotype: "Podcasts",
                infoid: "5",
                title: "Louis Ryan & Varun Talwar Podcast",
                subgenre: "Podcast Summary",
                overview:
                  "The co-creators of Istio– Louis Ryan of Google and Tetrate’s Varun Talwar– talk with TC Currie on the history of Istio, how it came to exist in its current form and the collaboration between Google, IBM and Lyft that got the project off the ground. They address how the project was designed to allow businesses to solve observability issues, …",
                tags: "podcast;istio",
                url: "https://www.tetrate.io/blog/podcast_louis_and_varun/"
              }
            ]
          },
          {
            infotype: "Events",
            info: []
          },
          {
            infotype: "Talk Videos",
            info: []
          },
          {
            infotype: "Podcasts",
            info: []
          }
        ]
      },
      {
        diagid: "L0-A",
        nodeid: 6,
        nodetype: "Deep Dive",
        caption: "...    (Operate Plane Deep Dive)",
        overview: "",
        tags: "envoy;getenvoy;kubernetes;multi-cluster;aws",
        infotypes: [
          {
            infotype: "Events",
            info: [
              {
                infotype: "Events",
                infoid: "9",
                title: "Tetrate at KubeCon San Diego",
                subgenre: "Event Summary",
                overview:
                  "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                tags: "event;istio;envoy;kubecon",
                url: "https://www.tetrate.io/blog/kubeconsd/"
              },
              {
                infotype: "Talk Videos",
                infoid: "27",
                title:
                  "Matt Klein at Tetrate's Service Mesh Day 2019: Envoy as the standard data plane and where it's going",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "Matt Klein, the creator of Envoy, says he had greatly underestimated the market demand for a proxy that could be used in a generic way. The Lyft software engineer wrote Envoy as a “communication bus” to handle issues like rate limiting, circuit breaking, and load balancing. It facilitates network-transparent applications and allows developers to focus on …",
                tags: "event;alk-videos;envoy",
                url: "https://www.tetrate.io/blog/smd_matt_klein/"
              },
              {
                infotype: "Talk Videos",
                infoid: "52",
                title: "Matt Klein at Service Mesh Day",
                subgenre: "",
                overview:
                  "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                tags: "event;talk-videos;service-mesh;envoy",
                url:
                  "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "53",
                title: "Chris Aniszczyk at Service Mesh Day",
                subgenre: "",
                overview:
                  "As companies adopt Kubernetes and reevaluate their architectures, Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation predicts they'll look increasingly to mesh to provide observability.",
                tags: "event;talk-videos;kubernetes;cncf;service-mesh",
                url:
                  "https://www.youtube.com/watch?v=9O9im_nLcQQ&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "63",
                title: "Latency Analysis with Istio & OpenCensus",
                subgenre: "",
                overview:
                  "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                tags: "event;talk-videos;microservices;istio;envoy",
                url:
                  "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
              }
            ]
          },
          {
            infotype: "Talk Videos",
            info: []
          }
        ]
      }
    ]
  },
  {
    diagramid: "L1-M",
    title: "Level 1 - Management Plane",
    overview: "",
    objects: [
      {
        diagid: "L1-M",
        nodeid: 7,
        nodetype: "Component",
        caption: "TSB UI",
        overview: "",
        tags: ""
      },
      {
        diagid: "L1-M",
        nodeid: 8,
        nodetype: "Component",
        caption: "Workflow Server",
        overview: "",
        tags: "",
        infotypes: []
      },
      {
        diagid: "L1-M",
        nodeid: 9,
        nodetype: "Component",
        caption: "API Server",
        overview: "",
        tags: "",
        infotypes: []
      },
      {
        diagid: "L1-M",
        nodeid: 10,
        nodetype: "Component",
        caption: "SkyWalking",
        overview: "",
        tags: "skywalking;apache-skywalking",
        infotypes: []
      }
    ]
  },
  {
    diagramid: "L1-C",
    title: "Level 1 - Control Plane",
    overview: "",
    objects: [
      {
        diagid: "L1-C",
        nodeid: 11,
        nodetype: "Component",
        caption: "Tetrate D",
        overview: "",
        tags: ""
      },
      {
        diagid: "L1-C",
        nodeid: 12,
        nodetype: "Component",
        caption: "Isitio",
        overview: "",
        tags: "istio",
        infotypes: []
      },
      {
        diagid: "L1-C",
        nodeid: 13,
        nodetype: "Component",
        caption: "SkyWalking",
        overview: "",
        tags: "skywalking;apache-skywalking",
        infotypes: []
      }
    ]
  },
  {
    diagramid: "L1-D",
    title: "Level 1 - Data Plane",
    overview: "",
    objects: [
      {
        diagid: "L1-D",
        nodeid: 14,
        nodetype: "Component",
        caption: "Envoy-Loadbalancer",
        overview: "",
        tags: "get-envoy;envoy"
      },
      {
        diagid: "L1-D",
        nodeid: 15,
        nodetype: "Component",
        caption: "Envoy-Proxy",
        overview: "",
        tags: "get-envoy;envoy;proxy",
        infotypes: [
          {
            infotype: "Events",
            info: [
              {
                infotype: "Events",
                infoid: "9",
                title: "Tetrate at KubeCon San Diego",
                subgenre: "Event Summary",
                overview:
                  "Going to KubeCon San Diego? Visit us at Booth SE65. KubeCon is just 2 weeks away, and Tetrate is excited to be sending our engineers, including top Istio and Envoy contributors. Look for the newly released Istio roadmap, Istio Up and Running, by Lee Calcote and our own Zack Butcher. And stop by and ask us anything about bridging legacy with cloud native. …",
                tags: "event;istio;envoy;kubecon",
                url: "https://www.tetrate.io/blog/kubeconsd/"
              },
              {
                infotype: "Talk Videos",
                infoid: "27",
                title:
                  "Matt Klein at Tetrate's Service Mesh Day 2019: Envoy as the standard data plane and where it's going",
                subgenre: "Service Mesh Day/ Talk Transcripts and Summary",
                overview:
                  "Matt Klein, the creator of Envoy, says he had greatly underestimated the market demand for a proxy that could be used in a generic way. The Lyft software engineer wrote Envoy as a “communication bus” to handle issues like rate limiting, circuit breaking, and load balancing. It facilitates network-transparent applications and allows developers to focus on …",
                tags: "event;alk-videos;envoy",
                url: "https://www.tetrate.io/blog/smd_matt_klein/"
              },
              {
                infotype: "Talk Videos",
                infoid: "52",
                title: "Matt Klein at Service Mesh Day",
                subgenre: "",
                overview:
                  "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
                tags: "event;talk-videos;service-mesh;envoy",
                url:
                  "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be"
              },
              {
                infotype: "Talk Videos",
                infoid: "63",
                title: "Latency Analysis with Istio & OpenCensus",
                subgenre: "",
                overview:
                  "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
                tags: "event;talk-videos;microservices;istio;envoy",
                url:
                  "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be"
              }
            ]
          },
          {
            infotype: "Talk Videos",
            info: []
          }
        ]
      },
      {
        diagid: "L1-D",
        nodeid: 16,
        nodetype: "Component",
        caption: "Ingress",
        overview: "",
        tags: "",
        infotypes: []
      },
      {
        diagid: "L1-D",
        nodeid: 17,
        nodetype: "Component",
        caption: "Egress",
        overview: "",
        tags: "",
        infotypes: []
      }
    ]
  }
];
