export const getImageUrl = (title: string, description: string, date: string, readingTime: string): string => {

  const layers = [

    'w_1204,h_634,c_fill,q_auto,f_auto',

    [
      ['w_1160'],
      ['c_fit'],
      ['co_rgb', 'ffffff'],
      ['l_text', `Quicksand_80_bold:${encodeURIComponent(title)}`],
    ].map(segment => segment.join(':')).join(','),

    'fl_layer_apply,g_north_west,y_40,x_40',

    [
      ['w_1160'],
      ['c_fit'],
      ['co_rgb', 'd4d4d8'],
      ['l_text', `Quicksand_40:${encodeURIComponent(description)}`],
    ].map(segment => segment.join(':')).join(','),

    'fl_layer_apply,g_west,y_20,x_40',

    [
      ['w_1160'],
      ['c_fit'],
      ['co_rgb', 'ffffff'],
      ['l_text', `Quicksand_40:${encodeURIComponent(date).replace(/%2F/g, '%252F')}`],
    ].map(segment => segment.join(':')).join(','),

    'fl_layer_apply,g_south_west,y_40,x_110',

    [
      ['w_1160'],
      ['c_fit'],
      ['co_rgb', 'ffffff'],
      ['l_text', `Quicksand_40:${encodeURIComponent(readingTime)}`],
    ].map(segment => segment.join(':')).join(','),

    'fl_layer_apply,g_south_east,y_46,x_40',

  ].join('/')


  return `https://res.cloudinary.com/reegodev/image/upload/${layers}/social_base_post.jpg`
}